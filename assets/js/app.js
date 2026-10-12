/*
 * Ma Radio — logique du lecteur (JavaScript natif, sans dépendance).
 * Le catalogue est lu depuis window.STATIONS (assets/js/stations.js).
 * Toutes les données de station sont affichées via textContent : aucune injection HTML.
 */
(() => {
  'use strict';

  const KEYS = {
    favorites: 'radio.favorites',
    last: 'radio.lastStation',
    volume: 'radio.volume',
    muted: 'radio.muted'
  };
  const CONNECT_TIMEOUT_MS = 15000;
  const ALL = ''; // valeur « tous » des filtres

  /* ---------- Stockage local (tolérant aux navigateurs qui le bloquent) ---------- */
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    /** Renvoie true si l'écriture a réussi. */
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
    },
    /** Teste que le stockage local est utilisable (navigation privée, stockage bloqué...). */
    available() {
      try {
        localStorage.setItem('radio.probe', '1');
        localStorage.removeItem('radio.probe');
        return true;
      } catch (e) { return false; }
    }
  };

  /* ---------- Utilitaires ---------- */
  const $ = (id) => document.getElementById(id);
  const normalize = (s) => String(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim();

  function isHttpUrl(value) {
    try {
      const u = new URL(value);
      return u.protocol === 'http:' || u.protocol === 'https:';
    } catch (e) { return false; }
  }

  /** Valide une entrée du catalogue ; renvoie null si elle est inutilisable. */
  function normalizeStation(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const id = String(raw.id || '').trim();
    const name = String(raw.name || '').trim();
    const streamUrl = String(raw.streamUrl || '').trim();
    if (!id || !name || !isHttpUrl(streamUrl)) {
      console.warn('Station ignorée (id, name ou streamUrl http(s) invalide) :', raw);
      return null;
    }
    const text = (v, d) => (String(v || '').trim() || d);
    return {
      id, name, streamUrl,
      country: text(raw.country, 'Non précisé'),
      language: text(raw.language, 'Non précisée'),
      genre: text(raw.genre, 'Non précisé'),
      logoUrl: isHttpUrl(raw.logoUrl) ? String(raw.logoUrl).trim() : '',
      website: isHttpUrl(raw.website) ? String(raw.website).trim() : '',
      // flux HTTP sur page HTTPS : probablement bloqué par le navigateur (contenu mixte)
      insecure: location.protocol === 'https:' && /^http:/i.test(streamUrl)
    };
  }

  /* ---------- État ---------- */
  const state = {
    stations: [],
    byId: new Map(),
    favorites: new Set(),
    filters: { query: '', country: ALL, language: ALL, genre: ALL },
    view: 'radios',      // 'radios' (catalogue) ou 'favorites'
    current: null,
    wantPlay: false,     // l'utilisateur veut écouter (connexion, tampon ou lecture)
    status: 'idle',
    volume: 80,
    muted: false
  };

  const audio = new Audio();
  audio.preload = 'none';
  let playToken = 0;
  let connectTimer = null;

  const el = {
    list: $('station-list'), empty: $('empty-state'), count: $('result-count'),
    search: $('search'), country: $('filter-country'), language: $('filter-language'), genre: $('filter-genre'),
    reset: $('btn-reset'), filtersSection: $('filters-section'), storageWarning: $('storage-warning'),
    orphans: $('orphans-notice'), orphansText: $('orphans-text'), forgetOrphans: $('btn-forget-orphans'),
    emptyIcon: $('empty-icon'), emptyText: $('empty-text'), emptyAction: $('empty-action'),
    navRadios: $('nav-radios'), navFavorites: $('nav-favorites'), navCurrent: $('nav-current'), favBadge: $('fav-badge'),
    player: $('player'), logo: $('player-logo'), name: $('player-name'),
    dot: $('status-dot'), statusText: $('status-text'), eq: $('player-eq'),
    play: $('btn-play'), retry: $('btn-retry'), mute: $('btn-mute'), volume: $('volume'), volumeValue: $('volume-value')
  };

  /* ---------- Éléments d'interface ---------- */
  function icon(name) {
    const i = document.createElement('i');
    i.className = 'bi ' + name;
    i.setAttribute('aria-hidden', 'true');
    return i;
  }

  function makeLogo(station, large) {
    const box = document.createElement('div');
    box.className = 'logo' + (large ? ' logo-lg' : '');
    box.setAttribute('aria-hidden', 'true');
    const fallback = () => box.replaceChildren(icon('bi-broadcast'));
    if (station && station.logoUrl) {
      const img = new Image();
      img.alt = '';
      img.loading = 'lazy';
      img.referrerPolicy = 'no-referrer';
      img.addEventListener('error', fallback);
      img.src = station.logoUrl;
      box.appendChild(img);
    } else {
      fallback();
    }
    return box;
  }

  function createCard(st) {
    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'station-card';
    card.dataset.id = st.id;

    const main = document.createElement('button');
    main.type = 'button';
    main.className = 'station-main';
    main.dataset.action = 'play';
    main.setAttribute('aria-label', 'Écouter ' + st.name);

    const text = document.createElement('div');
    text.className = 'min-w-0 flex-grow-1';
    const name = document.createElement('div');
    name.className = 'station-name text-truncate';
    name.textContent = st.name;
    const meta = document.createElement('div');
    meta.className = 'station-meta text-truncate';
    meta.textContent = [st.country, st.language, st.genre].join(' · ');
    if (st.insecure) {
      const b = document.createElement('span');
      b.className = 'badge-http';
      b.textContent = 'HTTP';
      b.title = 'Flux non sécurisé : peut être bloqué sur un site HTTPS';
      meta.appendChild(b);
    }
    text.append(name, meta);

    const eq = document.createElement('span');
    eq.className = 'eq';
    eq.setAttribute('aria-hidden', 'true');
    eq.append(document.createElement('span'), document.createElement('span'), document.createElement('span'));

    main.append(makeLogo(st, false), text, eq);
    card.appendChild(main);

    if (st.website) {
      const a = document.createElement('a');
      a.className = 'station-action';
      a.href = st.website;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.title = 'Site officiel';
      a.setAttribute('aria-label', 'Site officiel de ' + st.name + ' (nouvel onglet)');
      a.appendChild(icon('bi-box-arrow-up-right'));
      card.appendChild(a);
    }

    const fav = document.createElement('button');
    fav.type = 'button';
    fav.className = 'station-action btn-fav';
    fav.dataset.action = 'favorite';
    card.appendChild(fav);

    col.appendChild(card);
    return col;
  }

  function paintFavoriteButton(btn, st) {
    const on = state.favorites.has(st.id);
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', (on ? 'Retirer ' : 'Ajouter ') + st.name + (on ? ' des favoris' : ' aux favoris'));
    btn.title = on ? 'Retirer des favoris' : 'Ajouter aux favoris';
    btn.replaceChildren(icon(on ? 'bi-heart-fill' : 'bi-heart'));
  }

  /* ---------- Filtres et liste ---------- */
  function fillSelect(select, label, values) {
    select.replaceChildren();
    const all = document.createElement('option');
    all.value = ALL;
    all.textContent = label;
    select.appendChild(all);
    [...new Set(values)].sort((a, b) => a.localeCompare(b, 'fr')).forEach((v) => {
      const o = document.createElement('option');
      o.value = v;
      o.textContent = v;
      select.appendChild(o);
    });
  }

  function filteredStations() {
    const f = state.filters;
    const q = normalize(f.query);
    return state.stations
      .filter((s) =>
        (!q || normalize(s.name).includes(q)) &&
        (f.country === ALL || s.country === f.country) &&
        (f.language === ALL || s.language === f.language) &&
        (f.genre === ALL || s.genre === f.genre))
      .sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  }

  /* ---------- Favoris ----------
   * state.favorites contient les identifiants enregistrés (même ceux absents du catalogue, pour ne rien
   * perdre si le catalogue est momentanément vide ou modifié). Seuls ceux présents dans le catalogue sont affichés. */
  function favoriteStations() {
    return state.stations
      .filter((s) => state.favorites.has(s.id))
      .sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  }

  function orphanIds() {
    return [...state.favorites].filter((id) => !state.byId.has(id));
  }

  function showStorageWarning() { el.storageWarning.classList.remove('d-none'); }

  function persistFavorites() {
    if (!store.set(KEYS.favorites, [...state.favorites])) showStorageWarning();
  }

  function toggleFavorite(id, btn) {
    const st = state.byId.get(id);
    if (!st) return;
    if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
    persistFavorites();
    if (state.view === 'favorites') {
      renderList();                    // la station disparaît (ou apparaît) immédiatement
    } else {
      paintFavoriteButton(btn, st);
      paintNav();
    }
  }

  function showEmpty(iconName, text, withAction) {
    el.emptyIcon.className = 'bi ' + iconName + ' fs-1 d-block mb-2';
    el.emptyText.textContent = text;
    el.emptyAction.classList.toggle('d-none', !withAction);
    el.empty.classList.remove('d-none');
  }

  function renderList() {
    const inFav = state.view === 'favorites';
    const items = inFav ? favoriteStations() : filteredStations();
    const frag = document.createDocumentFragment();
    items.forEach((st) => {
      const col = createCard(st);
      paintFavoriteButton(col.querySelector('.btn-fav'), st);
      frag.appendChild(col);
    });
    el.list.replaceChildren(frag);

    const total = state.stations.length;
    if (inFav) {
      el.count.textContent = items.length + (items.length > 1 ? ' favoris' : ' favori');
    } else {
      el.count.textContent = items.length + (items.length > 1 ? ' stations' : ' station') +
        (items.length !== total ? ' sur ' + total : '');
    }

    if (total === 0) {
      el.count.textContent = '';
      showEmpty('bi-exclamation-triangle', 'Le catalogue de stations est vide ou indisponible. Vérifie le fichier assets/js/stations.js.', false);
    } else if (items.length === 0 && inFav) {
      showEmpty('bi-heart', 'Tu n’as pas encore de favori. Touche le cœur d’une station pour l’ajouter ici.', true);
    } else if (items.length === 0) {
      showEmpty('bi-search', 'Aucune station ne correspond à ces critères.', false);
    } else {
      el.empty.classList.add('d-none');
    }

    const orphans = inFav && total > 0 ? orphanIds().length : 0;
    el.orphans.classList.toggle('d-none', orphans === 0);
    if (orphans > 0) {
      el.orphansText.textContent = orphans + (orphans > 1 ? ' favoris ne correspondent' : ' favori ne correspond') +
        ' plus à une station du catalogue.';
    }
    paintNav();
    paintCardStates();
  }

  /* ---------- Navigation entre les vues ----------
   * Le lecteur (barre fixe + unique objet Audio) est indépendant des vues : changer de vue ne touche pas à la lecture.
   * La vue est mémorisée dans l'adresse (#favoris), ce qui permet le bouton Retour et l'actualisation. */
  const VIEW_HASH = { radios: '#radios', favorites: '#favoris' };

  function viewFromHash() { return location.hash === VIEW_HASH.favorites ? 'favorites' : 'radios'; }

  function setCurrentPage(link, on) {
    if (on) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  }

  function paintNav() {
    const inFav = state.view === 'favorites';
    setCurrentPage(el.navRadios, !inFav);
    setCurrentPage(el.navFavorites, inFav);
    el.navFavorites.querySelector('i').className = 'bi ' + (inFav ? 'bi-heart-fill' : 'bi-heart');
    const n = favoriteStations().length;
    el.favBadge.textContent = String(n);
    el.favBadge.classList.toggle('d-none', n === 0);
    el.navFavorites.setAttribute('aria-label', 'Favoris' + (n ? ' (' + n + ')' : ''));
  }

  function applyView(view, scrollTop) {
    state.view = view;
    el.filtersSection.classList.toggle('d-none', view === 'favorites');
    renderList();
    if (scrollTop) window.scrollTo(0, 0);
  }

  function goTo(view) {
    if (state.view === view) return;
    try { history.pushState(null, '', VIEW_HASH[view]); } catch (e) { /* ignoré */ }
    applyView(view, true);
  }

  function resetFilters() {
    state.filters = { query: '', country: ALL, language: ALL, genre: ALL };
    el.search.value = el.country.value = el.language.value = el.genre.value = ALL;
  }

  /** « En lecture » : amène la station en cours à l'écran (changement de vue / filtres si nécessaire). */
  function revealCurrent() {
    const st = state.current;
    if (!st) return;
    const view = state.view === 'favorites' && state.favorites.has(st.id) ? 'favorites' : 'radios';
    if (view === 'radios' && !filteredStations().some((s) => s.id === st.id)) resetFilters();
    if (state.view !== view) goTo(view); else renderList();
    const card = [...el.list.querySelectorAll('.station-card')].find((c) => c.dataset.id === st.id);
    if (!card) return;
    card.scrollIntoView({ block: 'nearest' });
    card.classList.add('flash');
    setTimeout(() => card.classList.remove('flash'), 1200);
  }

  function paintCardStates() {
    el.list.querySelectorAll('.station-card').forEach((card) => {
      const isCurrent = !!state.current && card.dataset.id === state.current.id;
      card.classList.toggle('is-current', isCurrent);
      card.querySelector('.eq').classList.toggle('is-playing', isCurrent && state.status === 'playing');
    });
  }

  /* ---------- Statut et lecteur ---------- */
  const STATUS_TEXT = {
    idle: 'Choisis une station dans la liste',
    ready: 'Prêt',
    connecting: 'Connexion…',
    buffering: 'Mise en mémoire tampon…',
    playing: 'Lecture en cours'
  };

  function setStatus(kind, message) {
    state.status = kind;
    el.dot.className = 'status-dot status-' + kind;
    el.statusText.textContent = message || STATUS_TEXT[kind] || '';
    el.eq.classList.toggle('is-playing', kind === 'playing');
    const active = state.wantPlay;
    el.play.replaceChildren(icon(active ? 'bi-pause-fill' : 'bi-play-fill'));
    el.play.setAttribute('aria-label', active ? 'Pause' : 'Lecture');
    el.play.disabled = !state.current;
    el.navCurrent.disabled = !state.current;
    el.retry.classList.toggle('d-none', !state.current || kind === 'idle' || kind === 'ready');
    paintCardStates();
  }

  function paintPlayerStation() {
    const st = state.current;
    el.name.textContent = st ? st.name : 'Aucune station sélectionnée';
    const logo = makeLogo(st, true);
    el.logo.replaceChildren(...logo.childNodes);
  }

  /* ---------- Lecture audio ---------- */
  function clearConnectTimer() {
    if (connectTimer) { clearTimeout(connectTimer); connectTimer = null; }
  }

  function armConnectTimer() {
    clearConnectTimer();
    connectTimer = setTimeout(() => {
      if (state.wantPlay && (state.status === 'connecting' || state.status === 'buffering')) {
        state.wantPlay = false;
        releaseAudio();
        setStatus('error', 'Le flux ne répond pas. Appuie sur Relancer ou essaie une autre station.');
      }
    }, CONNECT_TIMEOUT_MS);
  }

  /** Coupe le flux et libère la connexion réseau (indispensable pour un flux en direct). */
  function releaseAudio() {
    clearConnectTimer();
    playToken++;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
  }

  function errorMessage(code) {
    const st = state.current;
    let msg;
    switch (code) {
      case 2: msg = 'Erreur réseau : le flux est inaccessible ou la connexion a été interrompue.'; break;
      case 3: msg = 'Le flux est illisible (erreur de décodage).'; break;
      case 4: msg = 'Flux indisponible ou format non pris en charge par ce navigateur.'; break;
      default: msg = 'Impossible de lire ce flux.';
    }
    if (st && st.insecure) msg += ' Ce flux est en HTTP : il est peut-être bloqué sur une page HTTPS.';
    return msg;
  }

  function startPlayback() {
    const st = state.current;
    if (!st) return;
    releaseAudio();                     // arrête tout flux précédent (un seul flux actif)
    const token = ++playToken;
    state.wantPlay = true;
    audio.src = st.streamUrl;
    setStatus('connecting');
    armConnectTimer();
    const p = audio.play();
    if (p && typeof p.catch === 'function') {
      p.catch((err) => {
        if (token !== playToken || (err && err.name === 'AbortError')) return;
        state.wantPlay = false;
        clearConnectTimer();
        if (err && err.name === 'NotAllowedError') {
          setStatus('error', 'Lecture bloquée par le navigateur. Appuie sur Lecture.');
        } else if (err && err.name === 'NotSupportedError') {
          setStatus('error', errorMessage(4));
        } else {
          setStatus('error', errorMessage(0));
        }
      });
    }
  }

  function stopPlayback() {
    state.wantPlay = false;
    releaseAudio();
    setStatus(state.current ? 'ready' : 'idle');
  }

  function togglePlay() {
    if (!state.current) return;
    if (state.wantPlay) stopPlayback(); else startPlayback();
  }

  function selectStation(id, autoplay) {
    const st = state.byId.get(id);
    if (!st) return;
    if (state.current && state.current.id === st.id) {
      if (autoplay) togglePlay();
      return;
    }
    state.wantPlay = false;
    releaseAudio();                     // coupe le flux précédent
    state.current = st;
    store.set(KEYS.last, st.id);
    paintPlayerStation();
    setStatus('ready');
    if (autoplay) startPlayback();
  }

  /* Événements de l'élément Audio */
  audio.addEventListener('playing', () => {
    if (!state.wantPlay) return;
    clearConnectTimer();
    setStatus('playing');
  });
  audio.addEventListener('waiting', () => {
    if (!state.wantPlay || !audio.getAttribute('src')) return;
    setStatus('buffering');
    armConnectTimer();
  });
  audio.addEventListener('error', () => {
    if (!audio.getAttribute('src')) return;   // erreur due à la libération volontaire du flux
    state.wantPlay = false;
    clearConnectTimer();
    setStatus('error', errorMessage(audio.error && audio.error.code));
  });
  audio.addEventListener('ended', () => {
    if (!state.wantPlay) return;
    state.wantPlay = false;
    setStatus('error', 'Le flux s’est arrêté. Appuie sur Relancer.');
  });
  audio.addEventListener('pause', () => {
    // pause externe (casque, notification système) : on libère le flux, la reprise se fait en relançant
    if (audio.paused && state.wantPlay && audio.getAttribute('src')) stopPlayback();
  });
  window.addEventListener('offline', () => {
    if (state.wantPlay) setStatus('error', 'Connexion Internet perdue.');
  });
  window.addEventListener('online', () => {
    if (state.current && state.status === 'error') {
      setStatus('error', 'Connexion rétablie. Appuie sur Relancer.');
    }
  });

  /* ---------- Volume ---------- */
  function applyVolume() {
    audio.volume = state.volume / 100;
    audio.muted = state.muted;
    const silent = state.muted || state.volume === 0;
    const name = silent ? 'bi-volume-mute-fill' : state.volume < 50 ? 'bi-volume-down-fill' : 'bi-volume-up-fill';
    el.mute.replaceChildren(icon(name));
    el.mute.setAttribute('aria-pressed', String(state.muted));
    el.mute.setAttribute('aria-label', state.muted ? 'Réactiver le son' : 'Couper le son');
    el.volume.value = String(state.volume);
    el.volumeValue.textContent = state.muted ? '0' : String(state.volume);
  }

  /* ---------- Événements d'interface ---------- */
  el.list.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const card = btn.closest('.station-card');
    if (!card) return;
    const id = card.dataset.id;
    if (btn.dataset.action === 'play') {
      selectStation(id, true);
    } else if (btn.dataset.action === 'favorite') {
      toggleFavorite(id, btn);
    }
  });

  el.search.addEventListener('input', () => { state.filters.query = el.search.value; renderList(); });
  el.country.addEventListener('change', () => { state.filters.country = el.country.value; renderList(); });
  el.language.addEventListener('change', () => { state.filters.language = el.language.value; renderList(); });
  el.genre.addEventListener('change', () => { state.filters.genre = el.genre.value; renderList(); });
  el.reset.addEventListener('click', () => { resetFilters(); renderList(); });
  el.forgetOrphans.addEventListener('click', () => {
    orphanIds().forEach((id) => state.favorites.delete(id));
    persistFavorites();
    renderList();
  });
  el.navCurrent.addEventListener('click', revealCurrent);
  window.addEventListener('hashchange', () => {
    const view = viewFromHash();
    if (view !== state.view) applyView(view, true);
  });

  el.play.addEventListener('click', togglePlay);
  el.retry.addEventListener('click', startPlayback);
  el.mute.addEventListener('click', () => {
    state.muted = !state.muted;
    store.set(KEYS.muted, state.muted);
    applyVolume();
  });
  el.volume.addEventListener('input', () => {
    state.volume = Math.min(100, Math.max(0, parseInt(el.volume.value, 10) || 0));
    if (state.muted && state.volume > 0) { state.muted = false; store.set(KEYS.muted, false); }
    store.set(KEYS.volume, state.volume);
    applyVolume();
  });

  /* ---------- Initialisation ---------- */
  function init() {
    const raw = Array.isArray(window.STATIONS) ? window.STATIONS : [];
    raw.forEach((r) => {
      const st = normalizeStation(r);
      if (!st) return;
      if (state.byId.has(st.id)) { console.warn('Identifiant de station en double ignoré :', st.id); return; }
      state.byId.set(st.id, st);
      state.stations.push(st);
    });

    fillSelect(el.country, 'Tous les pays', state.stations.map((s) => s.country));
    fillSelect(el.language, 'Toutes les langues', state.stations.map((s) => s.language));
    fillSelect(el.genre, 'Tous les genres', state.stations.map((s) => s.genre));

    const favs = store.get(KEYS.favorites, []);
    // Set => pas de doublons ; on garde aussi les identifiants absents du catalogue (voir « Favoris » plus haut)
    state.favorites = new Set((Array.isArray(favs) ? favs : []).filter((id) => typeof id === 'string' && id));
    if (!store.available()) showStorageWarning();
    const vol = Number(store.get(KEYS.volume, 80));
    state.volume = Number.isFinite(vol) ? Math.min(100, Math.max(0, Math.round(vol))) : 80;
    state.muted = store.get(KEYS.muted, false) === true;
    applyVolume();

    applyView(viewFromHash(), false);
    setStatus('idle');

    // Restaure la dernière station SANS lancer la lecture
    const last = store.get(KEYS.last, null);
    if (typeof last === 'string' && state.byId.has(last)) selectStation(last, false);

    // Réserve la place de la barre de lecture en bas de page
    const syncPlayerHeight = () =>
      document.documentElement.style.setProperty('--player-h', el.player.offsetHeight + 'px');
    syncPlayerHeight();
    if ('ResizeObserver' in window) new ResizeObserver(syncPlayerHeight).observe(el.player);

    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(() => { /* PWA facultative */ });
      });
    }
  }

  init();
})();
