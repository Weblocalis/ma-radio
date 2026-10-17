
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
  }
];

