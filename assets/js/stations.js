
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
    id: "quran-shuraim",
    name: "Coran — Saoud Al-Shuraim",
    country: "Arabie saoudite",
    language: "Arabe",
    genre: "Récitation du Coran",
    streamUrl: "https://radio.mp3islam.com/listen/alshuraim/radio.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=mp3islam.com&sz=128",
    website: "https://qurangallery.com/listen/fr/radio/radio-saud-al-shuraim"
  },
  
{
  id: "france-musique-classique-plus",
  name: "France Musique Classique Plus",
  country: "France",
  language: "Français",
  genre: "Musique classique et orchestres",
  streamUrl: "https://icecast.radiofrance.fr/francemusiqueclassiqueplus-midfi.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr&sz=128",
  website: "https://www.radiofrance.fr/francemusique"
},

{
  id: "hotmix-sport-workout",
  name: "Hotmix Sport Workout",
  country: "France",
  language: "Instrumental / International",
  genre: "Sport, fitness et musique énergique",
  streamUrl: "https://streaming.hotmixradio.com/hotmix-sport-plus-en-mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=hotmixradio.com&sz=128",
  website: "https://www.hotmixradio.com/"
},

{ 
id: "france-culture", 
name: "France Culture", 
country: "France", 
language: "Français", 
genre: "Culture, sciences, philosophie et idées", 
streamUrl: "https://icecast.radiofrance.fr/franceculture-midfi.mp3?id=openapi", 
logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr&sz=128", 
website: "https://www.radiofrance.fr/franceculture" 
},


  {
    id: "nightride-fm",
    name: "Nightride FM",
    country: "International",
    language: "Mixte (voix possibles)",
    genre: "Synthwave et cyberpunk",
    streamUrl: "https://stream.nightride.fm/nightride.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=nightride.fm&sz=128",
    website: "https://nightride.fm/"
  },
  {
    id: "nightride-chillsynth",
    name: "Chillsynth FM (Nightride)",
    country: "International",
    language: "Instrumental",
    genre: "Synthwave et cyberpunk",
    streamUrl: "https://stream.nightride.fm/chillsynth.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=nightride.fm&sz=128",
    website: "https://nightride.fm/"
  },
  {
    id: "nightride-datawave",
    name: "Datawave FM (Nightride)",
    country: "International",
    language: "Instrumental",
    genre: "Électronique et IDM",
    streamUrl: "https://stream.nightride.fm/datawave.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=nightride.fm&sz=128",
    website: "https://nightride.fm/"
  },
  {
    id: "nightride-spacesynth",
    name: "Spacesynth FM (Nightride)",
    country: "International",
    language: "Instrumental",
    genre: "Synthwave et cyberpunk",
    streamUrl: "https://stream.nightride.fm/spacesynth.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=nightride.fm&sz=128",
    website: "https://nightride.fm/"
  },
  {
    id: "code-radio",
    name: "Code Radio (freeCodeCamp)",
    country: "États-Unis",
    language: "Instrumental",
    genre: "Lo-fi et chillhop",
    streamUrl: "https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/radio.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=freecodecamp.org&sz=128",
    website: "https://coderadio.freecodecamp.org/"
  },
  
  {
    id: "radio-swiss-classic",
    name: "Radio Swiss Classic",
    country: "Suisse",
    language: "Instrumental",
    genre: "Classique",
    streamUrl: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128",
    logoUrl: "https://www.google.com/s2/favicons?domain=radioswissclassic.ch&sz=128",
    website: "https://radioswissclassic.ch/"
  },
  {
    id: "kexp-seattle",
    name: "KEXP",
    country: "United States",
    language: "English",
    genre: "Alternative, Indie Rock",
    streamUrl: "https://kexp.streamguys1.com/kexp160.aac",
    logoUrl: "https://kexp.org/favicon.ico",
    website: "https://www.kexp.org/"
  },
  {
    id: "somafm-groove-salad-classic",
    name: "SomaFM Groove Salad Classic",
    country: "United States",
    language: "Instrumental",
    genre: "Ambient, Downtempo, Chill",
    streamUrl: "https://ice5.somafm.com/gsclassic-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/gsclassic/"
  },
  {
    id: "somafm-fluid",
    name: "SomaFM Fluid",
    country: "United States",
    language: "Instrumental",
    genre: "Downtempo, Chill, Electronic",
    streamUrl: "https://ice5.somafm.com/fluid-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/fluid/"
  },
  {
    id: "somafm-mission-control",
    name: "SomaFM Mission Control",
    country: "United States",
    language: "Instrumental",
    genre: "Space, Ambient, Electronic",
    streamUrl: "https://ice5.somafm.com/missioncontrol-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/missioncontrol/"
  },
  {
    id: "somafm-illinois-street-lounge",
    name: "SomaFM Illinois Street Lounge",
    country: "United States",
    language: "Instrumental",
    genre: "Lounge, Exotica, Jazz",
    streamUrl: "https://ice5.somafm.com/illstreet-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/illstreet/"
  },
  {
    id: "somafm-indie-pop-rocks",
    name: "SomaFM Indie Pop Rocks!",
    country: "United States",
    language: "English",
    genre: "Indie Pop, Alternative Rock",
    streamUrl: "https://ice5.somafm.com/indiepop-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/indiepop/"
  },
  {
    id: "somafm-poptron",
    name: "SomaFM PopTron",
    country: "United States",
    language: "Instrumental",
    genre: "Electronic, Synthpop",
    streamUrl: "https://ice5.somafm.com/poptron-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/poptron/"
  },
  {
    id: "somafm-vaporwaves",
    name: "SomaFM Vaporwaves",
    country: "United States",
    language: "Instrumental",
    genre: "Vaporwave, Electronic, Chill",
    streamUrl: "https://ice5.somafm.com/vaporwaves-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/vaporwaves/"
  },
  {
    id: "somafm-the-insound",
    name: "SomaFM The In-Sound",
    country: "United States",
    language: "Instrumental",
    genre: "Lounge, Retro, Exotica",
    streamUrl: "https://ice5.somafm.com/insound-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/insound/"
  },
  {
    id: "somafm-jolly-ol-soul",
    name: "SomaFM Jolly Ol' Soul",
    country: "United States",
    language: "Instrumental",
    genre: "Soul, Funk, Vintage",
    streamUrl: "https://ice5.somafm.com/jollysoul-128-mp3",
    logoUrl: "https://somafm.com/favicon.ico",
    website: "https://somafm.com/jollysoul/"
  }
];
