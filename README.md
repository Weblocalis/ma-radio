# Ma Radio — lecteur radio Internet personnel

Site 100 % statique (HTML, CSS, JavaScript natif, Bootstrap 5.3.3 + Bootstrap Icons 1.11.3 via CDN, versions fixées avec SRI).
Aucun backend, aucune compilation, aucun secret.

## Arborescence

```
radio-player/
├── index.html
├── manifest.webmanifest
├── service-worker.js
├── README.md
└── assets/
    ├── css/style.css
    ├── js/stations.js      ← catalogue des stations (à modifier)
    ├── js/app.js           ← logique du lecteur
    ├── icons/              ← favicon.svg, icon-192.png, icon-512.png, apple-touch-icon.png
    └── images/             ← (vide, pour tes logos éventuels)
```

## Ajouter une station

Ouvre `assets/js/stations.js`, copie un bloc existant à la fin du tableau (sans oublier la virgule entre les blocs) :

```js
{
  id: "ma-radio",                       // unique, sans espace, ne plus le changer ensuite
  name: "Ma Radio",
  country: "France",
  language: "Français",
  genre: "Pop",
  streamUrl: "https://exemple.org/flux.mp3",   // http(s) uniquement, préfère https
  logoUrl: "https://exemple.org/logo.png",     // facultatif
  website: "https://exemple.org"               // facultatif
}
```

Les stations invalides (id/nom manquant, URL non http(s), id en double) sont ignorées, avec un avertissement dans la console du navigateur.
Où trouver l'URL d'un flux ? Sur la page « écouter en direct » de la radio (clic droit sur le lecteur, outils développeur > Réseau), ou dans la documentation publique de la radio. Vérifie toujours le flux dans ton navigateur.

## Déploiement (GitHub + Cloudflare Pages)

1. **Créer le dépôt** : sur github.com, « New repository », nom `ma-radio`, visibilité au choix, sans README initial.
2. **Ajouter les fichiers** : décompresse le projet ; sur la page du dépôt vide, « uploading an existing file », glisse **le contenu** du dossier `radio-player` (index.html à la racine du dépôt, pas dans un sous-dossier), puis « Commit changes ». (Ou en ligne de commande : `git init`, `git add .`, `git commit -m "Première version"`, `git branch -M main`, `git remote add origin https://github.com/TON-COMPTE/ma-radio.git`, `git push -u origin main`.)
3. **Envoyer les modifications** : c'est fait par le commit ci-dessus (ou `git push`).
4. **Connecter à Cloudflare Pages** : dash.cloudflare.com > Workers & Pages > Create > Pages > « Connect to Git », autorise GitHub, choisis le dépôt `ma-radio`.
5. **Configuration** : Framework preset = **None** ; Build command = **vide** ; Build output directory = **`/`** (ou `.`, ou vide selon l'interface, la racine du dépôt). Cliquer « Save and Deploy ».
6. **Vérifier en HTTPS** : ouvre l'adresse `https://ma-radio.pages.dev` (ou celle indiquée). Le cadenas doit apparaître ; choisis une station et lance la lecture. Pour l'installer : menu Chrome Android > « Installer l'application » / « Ajouter à l'écran d'accueil ».
7. **Mettre à jour** : modifie un fichier sur GitHub (icône crayon > Commit changes). Cloudflare redéploie seul en 1 à 2 minutes. Si l'ancienne version s'affiche, recharge la page (le service worker privilégie le réseau).

## Navigation et favoris

- Trois entrées en bas de l'écran, sous le lecteur : **Radios** (catalogue + recherche/filtres), **Favoris** (stations enregistrées, avec compteur) et **En lecture** (ramène la station en cours à l'écran).
- Le cœur de chaque carte ajoute ou retire un favori ; les favoris sont enregistrés dans le navigateur (`localStorage`, clé `radio.favorites`, liste d'identifiants de station).
- La vue active est dans l'adresse (`#radios` / `#favoris`) : le bouton Retour d'Android et l'actualisation de la page fonctionnent.
- Le lecteur et l'unique objet Audio sont hors des vues : changer de vue ne coupe jamais la lecture.
- Si tu retires ou renommes l'`id` d'une station du catalogue, son favori reste enregistré mais n'est plus affiché ; la vue Favoris propose alors « Oublier » pour le supprimer. Si seul le nom, l'URL du flux ou le genre change (même `id`), le favori suit automatiquement.
- Si le stockage du navigateur est bloqué (navigation privée...), un avertissement s'affiche : les favoris fonctionnent pendant la session mais ne sont pas conservés.

## Ce qui a été testé

- Syntaxe JavaScript (`node --check`), manifest JSON valide, empreintes SRI recalculées depuis les paquets npm officiels.
- Logique de l'interface dans jsdom avec un élément audio simulé (63 vérifications) : recherche, filtres, favoris (ajout, retrait, persistance, doublons, clics répétés, actualisation), navigation entre vues pendant la lecture sans aucun appel à l'audio, instance Audio unique, lancement depuis les favoris, « En lecture », favori orphelin ou modifié, catalogue vide ou absent, stockage indisponible ou en erreur, JSON corrompu, erreurs de flux distinctes des erreurs de favoris, volume/muet, lecture bloquée, perte de connexion.
- **Non testé** : lecture réelle des flux, rendu et ergonomie sur un vrai téléphone, bouton Retour d'Android, installation PWA, service worker dans un vrai navigateur.

## Limitations connues

- Les URL Radio France du catalogue sont documentées publiquement mais non vérifiées par lecture réelle ; elles peuvent changer.
- Certains flux HTTP sont bloqués sur un site HTTPS (contenu mixte) ; une station HTTP affiche un badge « HTTP ». Certains serveurs refusent aussi l'écoute depuis un navigateur (CORS/restrictions), sans proxy ce n'est pas contournable ici.
- Les formats pris en charge dépendent du navigateur (MP3 et AAC en général ; les flux HLS `.m3u8` ne passent pas dans l'élément audio de Chrome/Firefox).
- Pas de titre de morceau ni d'émission : les métadonnées ne sont pas disponibles de façon fiable avec l'élément Audio.
- Pas d'écoute hors ligne : seul l'interface est mise en cache. Hors ligne, la mise en forme Bootstrap (CDN) peut manquer si elle n'est pas déjà dans le cache du navigateur.
- Sur Android, la lecture peut s'interrompre si le système suspend l'onglet ; Relancer remet le flux en route. Sur iOS, le volume du site est contrôlé par les boutons physiques.
- Pause = arrêt du flux (en direct, on ne reprend pas un tampon périmé) ; reprendre relance la connexion.
- Les logos sont chargés depuis l'adresse indiquée ; un logo HTTP ou introuvable est remplacé par une icône.
- Les favoris et préférences sont propres à chaque navigateur/appareil (pas de synchronisation) ; vider les données du site les efface.
- Retirer un favori depuis la vue Favoris le fait disparaître immédiatement, sans annulation possible.
