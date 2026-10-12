
/*
 * Ma Radio — Catalogue des stations
 *
 * Ajouter une station :
 * - id         : identifiant unique
 * - name       : nom affiché
 * - country    : pays
 * - language   : langue
 * - genre      : style musical ou catégorie
 * - streamUrl  : URL directe du flux audio
 * - logoUrl    : URL du logo ou de l'icône
 * - website    : site de la station
 *
 * Attention : les flux doivent être testés dans le navigateur.
 */

window.STATIONS = [
  {
    id: "france-inter",
    name: "France Inter",
    country: "France",
    language: "Français",
    genre: "Généraliste",
    streamUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr&sz=128",
    website: "https://www.radiofrance.fr/franceinter"
  },
  {
    id: "france-info",
    name: "franceinfo",
    country: "France",
    language: "Français",
    genre: "Information",
    streamUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=franceinfo.fr&sz=128",
    website: "https://www.franceinfo.fr"
  },
  {
    id: "france-culture",
    name: "France Culture",
    country: "France",
    language: "Français",
    genre: "Culture",
    streamUrl: "https://icecast.radiofrance.fr/franceculture-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr&sz=128",
    website: "https://www.radiofrance.fr/franceculture"
  },
  {
    id: "france-musique",
    name: "France Musique",
    country: "France",
    language: "Français",
    genre: "Classique",
    streamUrl: "https://icecast.radiofrance.fr/francemusique-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr&sz=128",
    website: "https://www.radiofrance.fr/francemusique"
  },
  {
    id: "fip",
    name: "FIP",
    country: "France",
    language: "Français",
    genre: "Éclectique",
    streamUrl: "https://icecast.radiofrance.fr/fip-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=fip.fr&sz=128",
    website: "https://www.radiofrance.fr/fip"
  },
  {
    id: "mouv",
    name: "Mouv'",
    country: "France",
    language: "Français",
    genre: "Hip-hop",
    streamUrl: "https://icecast.radiofrance.fr/mouv-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr&sz=128",
    website: "https://www.radiofrance.fr/mouv"
  },
  {
    id: "fip-jazz",
    name: "FIP Jazz",
    country: "France",
    language: "Instrumental",
    genre: "Jazz",
    streamUrl: "https://icecast.radiofrance.fr/fipjazz-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=fip.fr&sz=128",
    website: "https://www.radiofrance.fr/fip"
  },
  {
    id: "fip-rock",
    name: "FIP Rock",
    country: "France",
    language: "Instrumental",
    genre: "Rock",
    streamUrl: "https://icecast.radiofrance.fr/fiprock-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=fip.fr&sz=128",
    website: "https://www.radiofrance.fr/fip"
  },
  {
    id: "fip-groove",
    name: "FIP Groove",
    country: "France",
    language: "Instrumental",
    genre: "Groove",
    streamUrl: "https://icecast.radiofrance.fr/fipgroove-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=fip.fr&sz=128",
    website: "https://www.radiofrance.fr/fip"
  },
  {
    id: "fip-monde",
    name: "FIP Monde",
    country: "France",
    language: "International",
    genre: "Musiques du monde",
    streamUrl: "https://icecast.radiofrance.fr/fipworld-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=fip.fr&sz=128",
    website: "https://www.radiofrance.fr/fip"
  },
  {
    id: "fip-electro",
    name: "FIP Électro",
    country: "France",
    language: "Instrumental",
    genre: "Électro",
    streamUrl: "https://icecast.radiofrance.fr/fipelectro-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=fip.fr&sz=128",
    website: "https://www.radiofrance.fr/fip"
  },
  {
    id: "ici-la-rochelle",
    name: "ici La Rochelle",
    country: "France",
    language: "Français",
    genre: "Radio locale",
    streamUrl: "https://icecast.radiofrance.fr/fblarochelle-midfi.mp3?id=openapi",
    logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr&sz=128",
    website: "https://www.radiofrance.fr/ici"
  },
  {
    id: "tarab-radio",
    name: "Tarab Radio",
    country: "Maroc",
    language: "Arabe",
    genre: "Tarab arabe classique",
    streamUrl: "https://stream.zeno.fm/fy8achbq97zuv",
    logoUrl: "https://www.google.com/s2/favicons?domain=tarabradio.ma&sz=128",
    website: "https://www.tarabradio.ma/"
  },
  {
    id: "medina-fm-andalou",
    name: "Medina FM Andalou",
    country: "Maroc",
    language: "Arabe",
    genre: "Musique arabo-andalouse",
    streamUrl: "https://medinaandalou.ice.infomaniak.ch/medinaandalou-128.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=medinafm.ma&sz=128",
    website: "https://medinafm.ma/radio/medina-andalou"
  },
  {
    id: "medina-fm-tarab",
    name: "Medina FM Tarab",
    country: "Maroc",
    language: "Arabe",
    genre: "Tarab oriental classique",
    streamUrl: "https://medinatarab.ice.infomaniak.ch/medinatarab-128.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=medinafm.ma&sz=128",
    website: "https://medinafm.ma/"
  },
  {
    id: "adwaa-fm",
    name: "Adwaa FM",
    country: "Maroc",
    language: "Arabe",
    genre: "Musique arabe",
    streamUrl: "https://stream.zeno.fm/tvxvud2kpm0uv",
    logoUrl: "https://www.google.com/s2/favicons?domain=adwaafm.com&sz=128",
    website: "https://adwaafm.com/fr/radio-adwaa-fm/"
  },
  {
    id: "quran-shuraim",
    name: "Coran — Saoud Al-Shuraim",
    country: "Arabie saoudite",
    language: "Arabe",
    genre: "Récitation du Coran",
    streamUrl: "https://radio.mp3islam.com/listen/alshuraim/radio.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=mp3islam.com&sz=128",
    website: "https://qurangallery.com/listen/fr/radio/radio-saud-al-shuraim"
  }
];
