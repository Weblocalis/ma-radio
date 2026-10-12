
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
