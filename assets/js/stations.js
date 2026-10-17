
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
    logoUrl: "https://www.google.com/s2/favicons?domain=www.tarabradio.ma&sz=128",
    website: "https://www.tarabradio.ma/"
  },
  {
    id: "medina-fm-andalou",
    name: "Medina FM Andalou",
    country: "Maroc",
    language: "Arabe",
    genre: "Musique arabo-andalouse",
    streamUrl: "https://medinaandalou.ice.infomaniak.ch/medinaandalou-128.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=medinafm.ma/radio/medina-andalou&sz=128",
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
  logoUrl: "https://www.google.com/s2/favicons?domain=www.radiofrance.fr/francemusique&sz=128",
  website: "https://www.radiofrance.fr/francemusique"
},

{
  id: "hotmix-sport-workout",
  name: "Hotmix Sport Workout",
  country: "France",
  language: "",
  genre: "Sport, fitness et musique énergique",
  streamUrl: "https://streaming.hotmixradio.com/hotmix-sport-plus-en-mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.hotmixradio.com&sz=128",
  website: "https://www.hotmixradio.com/"
},

{ 
id: "france-culture", 
name: "France Culture", 
country: "France", 
language: "Français", 
genre: "Culture, sciences, philosophie et idées", 
streamUrl: "https://icecast.radiofrance.fr/franceculture-midfi.mp3?id=openapi", 
logoUrl: "https://www.google.com/s2/favicons?domain=radiofrance.fr/franceculture&sz=128", 
website: "https://www.radiofrance.fr/franceculture" 
},
{
  id: "france-inter",
  name: "France Inter",
  country: "France",
  language: "Français",
  genre: "Actualités, Culture, Débats",
  streamUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3?id=openapi",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.radiofrance.fr/franceinter&sz=128",
  website: "https://www.radiofrance.fr/franceinter"
},
{
  id: "rtl-france",
  name: "RTL",
  country: "France",
  language: "Français",
  genre: "Généraliste, Actualités, Divertissement",
  streamUrl: "https://icecast.rtl.fr/rtl-1-44-128",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.rtl.fr&sz=128",
  website: "https://www.rtl.fr/direct"
},
{
  id: "franceinfo",
  name: "Franceinfo",
  country: "France",
  language: "Français",
  genre: "Actualités, Information",
  streamUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3?id=openapi",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.radiofrance.fr/franceinfo&sz=128",
  website: "https://www.radiofrance.fr/franceinfo"
},
{
  id: "nrj-france",
  name: "NRJ",
  country: "France",
  language: "Français",
  genre: "Pop, Hits, Dance",
  streamUrl: "https://streaming.nrjaudio.fm/oufdfatx4thg",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.nrj.fr&sz=128",
  website: "https://www.nrj.fr/"
},
{
  id: "fip-france",
  name: "FIP",
  country: "France",
  language: "Instrumental",
  genre: "Éclectique, Jazz, Rock, Classique, Musiques du monde",
  streamUrl: "https://icecast.radiofrance.fr/fip-midfi.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.radiofrance.fr/fip&sz=128",
  website: "https://www.radiofrance.fr/fip"
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
    language: "",
    genre: "Synthwave et cyberpunk",
    streamUrl: "https://stream.nightride.fm/spacesynth.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=nightride.fm&sz=128",
    website: "https://nightride.fm/"
  },
  {
    id: "code-radio",
    name: "Code Radio (freeCodeCamp)",
    country: "États-Unis",
    language: "",
    genre: "Lo-fi et chillhop, Instrumental",
    streamUrl: "https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/radio.mp3",
    logoUrl: "https://www.google.com/s2/favicons?domain=freecodecamp.org&sz=128",
    website: "https://coderadio.freecodecamp.org/"
  },
  
  {
    id: "radio-swiss-classic",
    name: "Radio Swiss Classic",
    country: "Suisse",
    language: "",
    genre: "Classique, Instrumental",
    streamUrl: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128",
    logoUrl: "https://www.google.com/s2/favicons?domain=radioswissclassic.ch&sz=128",
    website: "https://radioswissclassic.ch/"
  },
{
  id: "bbc-world-service",
  name: "BBC Radio World Service",
  country: "United Kingdom",
  language: "English",
  genre: "International News, Current Affairs",
  streamUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.bbc.co.uk/sounds/play/live/bbc_world_service&sz=128",
  website: "https://www.bbc.co.uk/sounds/play/live/bbc_world_service"
},
{
  id: "classic-fm-uk",
  name: "Classic FM",
  country: "United Kingdom",
  language: "English",
  genre: "Classical, Film Scores, Orchestral",
  streamUrl: "https://media-ssl.musicradio.com/ClassicFM",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.globalplayer.com/live/classicfm/&sz=128",
  website: "https://www.globalplayer.com/live/classicfm/"
},
{
  id: "kexp-seattle",
  name: "KEXP",
  country: "United States",
  language: "English",
  genre: "Alternative Rock, Indie, Music Discovery",
  streamUrl: "https://kexp.streamguys1.com/kexp160.aac",
  logoUrl: "https://www.google.com/s2/favicons?domain=kexp.org&sz=128",
  website: "https://kexp.org/"
},
{
  id: "radio-paradise",
  name: "Radio Paradise",
  country: "United States",
  language: "English",
  genre: "Rock, Pop, Eclectic",
  streamUrl: "https://stream.radioparadise.com/mp3-128",
  logoUrl: "https://www.google.com/s2/favicons?domain=radioparadise.com&sz=128",
  website: "https://radioparadise.com/"
},
{
  id: "deutschlandfunk",
  name: "Deutschlandfunk",
  country: "Allemagne",
  language: "Allemand",
  genre: "Actualités, Analyses, Débats",
  streamUrl: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.deutschlandfunk.de&sz=128",
  website: "https://www.deutschlandfunk.de/"
},
{
  id: "radio-swiss-classic",
  name: "Radio Swiss Classic",
  country: "Suisse",
  language: "Principalement musicale",
  genre: "Musique classique, Instrumental, Détente",
  streamUrl: "https://stream.srg-ssr.ch/srgssr/rsc_de/mp3/128",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.radioswissclassic.ch&sz=128",
  website: "https://www.radioswissclassic.ch/"
},
{
  id: "nostalgie-fr",
  name: "Nostalgie",
  country: "France",
  language: "Français",
  genre: "Variété française, hits rétro",
  streamUrl: "https://streaming.nrjaudio.fm/oug7girb92oc",
  logoUrl: "https://www.google.com/s2/favicons?domain=nostalgie.fr&sz=128",
  website: "https://www.nostalgie.fr/"
},
{
  id: "fun-radio-fr",
  name: "Fun Radio",
  country: "France",
  language: "Français",
  genre: "Dance, électro, hits",
  streamUrl: "https://icecast.funradio.fr/fun-1-44-128",
  logoUrl: "https://www.google.com/s2/favicons?domain=funradio.fr&sz=128",
  website: "https://www.funradio.fr/"
},
{
  id: "los40-es",
  name: "LOS40",
  country: "Espagne",
  language: "Espagnol",
  genre: "Pop, hits espagnols et internationaux",
  streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=los40.com&sz=128",
  website: "https://los40.com/"
},
{
  id: "cadena-ser-es",
  name: "Cadena SER",
  country: "Espagne",
  language: "Espagnol",
  genre: "Actualités, débats, sport",
  streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=cadenaser.com&sz=128",
  website: "https://cadenaser.com/"
},
{
  id: "cope-es",
  name: "COPE",
  country: "Espagne",
  language: "Espagnol",
  genre: "Actualités, débats, sport",
  streamUrl: "https://madrid-cope-rrcast.flumotion.com/cope/madrid.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=cope.es&sz=128",
  website: "https://www.cope.es/"
},
{
  id: "deutschlandfunk-kultur-de",
  name: "Deutschlandfunk Kultur",
  country: "Allemagne",
  language: "Allemand",
  genre: "Culture, arts, débats, musique",
  streamUrl: "https://st02.sslstream.dlf.de/dlf/02/128/mp3/stream.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.deutschlandfunkkultur.de&sz=128",
  website: "https://www.deutschlandfunkkultur.de/"
},
{
  id: "n-joy-de",
  name: "N-JOY",
  country: "Allemagne",
  language: "Allemand",
  genre: "Pop, hits contemporains",
  streamUrl: "https://icecast.ndr.de/ndr/njoy/live/mp3/128/stream.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.n-joy.de&sz=128",
  website: "https://www.n-joy.de/"
},
{
  id: "radio-deejay-it",
  name: "Radio Deejay",
  country: "Italie",
  language: "Italien",
  genre: "Musique populaire, divertissement",
  streamUrl: "https://stream.deejay.hr/",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.deejay.it&sz=128",
  website: "https://www.deejay.it/"
},
{
  id: "rai-radio-1-it",
  name: "Rai Radio 1",
  country: "Italie",
  language: "Italien",
  genre: "Actualités, sport, généraliste",
  streamUrl: "https://radiounoita-live.akamaized.net/hls/live/2032820/radiounoita/radiounoita/playlist.m3u8",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.raiplaysound.it&sz=128",
  website: "https://www.raiplaysound.it/"
},
{
  id: "npo-radio-2-nl",
  name: "NPO Radio 2",
  country: "Pays-Bas",
  language: "Néerlandais",
  genre: "Pop, grands classiques",
  streamUrl: "https://icecast.omroep.nl/radio2-bb-mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.nporadio2.nl&sz=128",
  website: "https://www.nporadio2.nl/"
},
{
  id: "qmusic-nl",
  name: "Qmusic",
  country: "Pays-Bas",
  language: "Néerlandais",
  genre: "Hits, musique populaire",
  streamUrl: "https://audio-streaming.qmusic.nl/Qmusic_nl_live_high.aac",
  logoUrl: "https://www.google.com/s2/favicons?domain=qmusic.nl&sz=128",
  website: "https://qmusic.nl/"
},
{
  id: "sveriges-radio-p1-se",
  name: "Sveriges Radio Finska",
  country: "Suède",
  language: "Suédois",
  genre: "Actualités, société, culture",
  streamUrl: "https://www.sverigesradio.se/topsy/direkt/srapi/226.mp3",
  logoUrl: "https://www.google.com/s2/favicons?domain=www.sverigesradio.se&sz=128",
  website: "https://www.sverigesradio.se/"
},
{
  id: "nrk-p1-no",
  name: "NRK P1",
  country: "Norvège",
  language: "Norvégien",
  genre: "Généraliste, actualités",
  streamUrl: "https://nrk-live-radio-world.akamaized.net/p1/muxed.m3u8",
  logoUrl: "https://www.google.com/s2/favicons?domain=radio.nrk.no&sz=128",
  website: "https://radio.nrk.no/"
},

];
