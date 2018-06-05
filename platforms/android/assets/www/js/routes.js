angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


   .state('chiSiamo', {
    url: '/avis_nicosia',
   
        templateUrl: 'templates/chiSiamo.html',
        controller: 'chiSiamoCtrl'

    
  })

  .state('tabsController.register', {
    url: '/register',
    views: {
      'tab4': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })

  .state('tabsController.iProssimiEventi', {
    url: '/calendario',
    views: {
      'tab2': {
        templateUrl: 'templates/iProssimiEventi.html',
        controller: 'iProssimiEventiCtrl'
      }
    }
  })

  .state('tabsController.sondaggio', {
    url: '/sondaggio',
    views: {
      'tab3': {
        templateUrl: 'templates/sondaggio.html',
        controller: 'SondaggioCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('laPreghieraDelDonatore', {
    url: '/preghiera',
    templateUrl: 'templates/laPreghieraDelDonatore.html',
    controller: 'laPreghieraDelDonatoreCtrl'
  })

 //MANGIARE

 .state('ristoro', {
  cache: false,
  url: '/ristoro',
  templateUrl: 'templates/Categorie/mangiare/ristoro.html',
  controller: 'ristoroCtrl'
})
 .state('bar', {
  cache: false,
  url: '/bar',
  templateUrl: 'templates/Categorie/mangiare/bar.html',
  controller: 'barCtrl'
})
.state('cantine', {
  cache: false,
  url: '/cantine',
  templateUrl: 'templates/Categorie/mangiare/cantine.html',
  controller: 'cantineCtrl'
})
.state('chilometro', {
  cache: false,
  url: '/chilometro',
  templateUrl: 'templates/Categorie/mangiare/chilometro.html',
  controller: 'chilometroCtrl'
})
.state('gelateria', {
  cache: false,
  url: '/gelateria',
  templateUrl: 'templates/Categorie/mangiare/gelateria.html',
  controller: 'gelateriaCtrl'
})
.state('pasticceria', {
  cache: false,
  url: '/pasticceria',
  templateUrl: 'templates/Categorie/mangiare/pasticceria.html',
  controller: 'pasticceriaCtrl'
})
.state('pizzeria', {
  cache: false,
  url: '/pizzeria',
  templateUrl: 'templates/Categorie/mangiare/pizzeria.html',
  controller: 'pizzeriaCtrl'
})
.state('ristoranti', {
  cache: false,
  url: '/ristoranti',
  templateUrl: 'templates/Categorie/mangiare/ristoranti.html',
  controller: 'ristorantiCtrl'
})
.state('snack', {
  cache: false,
  url: '/snack',
  templateUrl: 'templates/Categorie/mangiare/snack.html',
  controller: 'snackCtrl'
})

.state('supermercati', {
  cache: false,
  url: '/supermercati',
  templateUrl: 'templates/Categorie/mangiare/supermercati.html',
  controller: 'supermercatiCtrl'
})

 //FINE MANGIARE
  //SHOPPING
  .state('shopping', {
    cache: false,
    url: '/shopping',
    templateUrl: 'templates/Categorie/Shopping/shopping.html',
    controller: 'shoppingCtrl'
  })
  .state('abbigliamento', {
    cache: false,
    url: '/abbigliamento',
    templateUrl: 'templates/Categorie/Shopping/Abbigliamento.html',
    controller: 'abbigliamentoCtrl'
  })
  .state('calzature', {
    cache: false,
    url: '/calzature',
    templateUrl: 'templates/Categorie/Shopping/Calzature.html',
    controller: 'calzatureCtrl'
  })
  .state('gioielli', {
    cache: false,
    url: '/gioielli',
    templateUrl: 'templates/Categorie/Shopping/Gioielli.html',
    controller: 'gioielliCtrl'
  })
  .state('ottica', {
    cache: false,
    url: '/ottica',
    templateUrl: 'templates/Categorie/Shopping/Ottica.html',
    controller: 'otticaCtrl'
  })
  .state('prodotti', {
    cache: false,
    url: '/prodotti',
    templateUrl: 'templates/Categorie/Shopping/Prodotti.html',
    controller: 'prodottiCtrl'
  })
  .state('profumeria', {
    cache: false,
    url: '/profumeria',
    templateUrl: 'templates/Categorie/Shopping/Profumeria.html',
    controller: 'profumeriaCtrl'
  })
  .state('souvenir', {
    cache: false,
    url: '/souvenir',
    templateUrl: 'templates/Categorie/Shopping/Souvenir.html',
    controller: 'souvenirCtrl'
  })
  .state('tabacchi', {
    cache: false,
    url: '/tabacchi',
    templateUrl: 'templates/Categorie/Shopping/Tabacchi.html',
    controller: 'tabacchiCtrl'
  })

  .state('artigianato', {
    cache: false,
    url: '/sponsor',
    templateUrl: 'templates/Categorie/Shopping/artigianato.html',
    controller: 'sponsorCtrl'
  })

  //FINE SHOPPING
  //orari
  .state('orari', {
    cache: false,
    url: '/orari',
    templateUrl: 'templates/Categorie/Orari/orari.html',
    controller: 'orarioCtrl'
  })
  .state('listaorari', {
    cache: false,
    url: '/listaorari',
    templateUrl: 'templates/Categorie/Orari/listaorari.html',
    controller: 'listaorariCtrl'
  })
  .state('listaorarioggi', {
    cache: false,
    url: '/listaorarioggi',
    templateUrl: 'templates/Categorie/Orari/listaorarioggi.html',
    controller: 'listaorarioggiCtrl'
  })
  .state('listaoraridomani', {
    cache: false,
    url: '/listaoraridomani',
    templateUrl: 'templates/Categorie/Orari/listaoraridomani.html',
    controller: 'listaoraridomaniCtrl'
  })
  .state('ischianapolimolodomani', {
    cache: false,
    url: '/ischianapolimolodomani',
    templateUrl: 'templates/Categorie/Orari/ischianapolimolodomani.html',
    controller: 'ischianapolimolodomaniCtrl'
  })
  .state('ischianapolimolooggi', {
    cache: false,
    url: '/ischianapolimolooggi',
    templateUrl: 'templates/Categorie/Orari/ischianapolimolooggi.html',
    controller: 'ischianapolimolooggiCtrl'
  })
  .state('ischianapolimolo', {
    cache: false,
    url: '/ischianapolimolo',
    templateUrl: 'templates/Categorie/Orari/ischianapolimolo.html',
    controller: 'ischianapolimoloCtrl'
  })
  .state('napolimoloischiaoggi', {
    cache: false,
    url: '/napolimoloischiaoggi',
    templateUrl: 'templates/Categorie/Orari/napolimoloischiaoggi.html',
    controller: 'napolimoloischiaoggiCtrl'
  })
  .state('napolimoloischiadomani', {
    cache: false,
    url: '/napolimoloischiadomani',
    templateUrl: 'templates/Categorie/Orari/napolimoloischiadomani.html',
    controller: 'napolimoloischiadomaniCtrl'
  })
  .state('napolimoloischia', {
    cache: false,
    url: '/napolimoloischia',
    templateUrl: 'templates/Categorie/Orari/napolimoloischia.html',
    controller: 'napolimoloischiaCtrl'
  })
  .state('ischiapozzuolioggi', {
    cache: false,
    url: '/ischiapozzuolioggi',
    templateUrl: 'templates/Categorie/Orari/ischiapozzuolioggi.html',
    controller: 'ischiapozzuolioggiCtrl'
  })
  .state('ischiapozzuolidomani', {
    cache: false,
    url: '/ischiapozzuolidomani',
    templateUrl: 'templates/Categorie/Orari/ischiapozzuolidomani.html',
    controller: 'ischiapozzuolidomaniCtrl'
  })
  .state('ischiapozzuoli', {
    cache: false,
    url: '/ischiapozzuoli',
    templateUrl: 'templates/Categorie/Orari/ischiapozzuoli.html',
    controller: 'ischiapozzuoliCtrl'
  })
  .state('pozzuoliischia', {
    cache: false,
    url: '/pozzuoliischia',
    templateUrl: 'templates/Categorie/Orari/pozzuoliischia.html',
    controller: 'pozzuoliischiaCtrl'
  })
  .state('pozzuoliischiaoggi', {
    cache: false,
    url: '/pozzuoliischiaoggi',
    templateUrl: 'templates/Categorie/Orari/pozzuoliischiaoggi.html',
    controller: 'pozzuoliischiaoggiCtrl'
  })
  .state('pozzuoliischiadomani', {
    cache: false,
    url: '/pozzuoliischiadomani',
    templateUrl: 'templates/Categorie/Orari/pozzuoliischiadomani.html',
    controller: 'pozzuoliischiadomaniCtrl'
  })
  .state('ischiaprocida', {
    cache: false,
    url: '/ischiaprocida',
    templateUrl: 'templates/Categorie/Orari/ischiaprocida.html',
    controller: 'ischiaprocidaCtrl'
  })
  .state('ischiaprocidaoggi', {
    cache: false,
    url: '/ischiaprocidaoggi',
    templateUrl: 'templates/Categorie/Orari/ischiaprocidaoggi.html',
    controller: 'ischiaprocidaoggiCtrl'
  })
  .state('ischiaprocidadomani', {
    cache: false,
    url: '/ischiaprocidadomani',
    templateUrl: 'templates/Categorie/Orari/ischiaprocidadomani.html',
    controller: 'ischiaprocidadomaniCtrl'
  })
  .state('procidaischia', {
    cache: false,
    url: '/procidaischia',
    templateUrl: 'templates/Categorie/Orari/procidaischia.html',
    controller: 'procidaischiaCtrl'
  })
  .state('procidaischiaoggi', {
    cache: false,
    url: '/procidaischiaoggi',
    templateUrl: 'templates/Categorie/Orari/procidaischiaoggi.html',
    controller: 'procidaischiaoggiCtrl'
  })
  .state('procidaischiadomani', {
    cache: false,
    url: '/procidaischiadomani',
    templateUrl: 'templates/Categorie/Orari/procidaischiadomani.html',
    controller: 'procidaischiadomaniCtrl'
  })
  //fine orari
  //info
.state('infoutili', {
    cache: false,
    url: '/info',
    templateUrl: 'templates/Categorie/infoutili/info.html',
    controller: 'infoutiliCtrl'
  })
  .state('comearrivare', {
    cache: false,
    url: '/comearrivare',
    templateUrl: 'templates/Categorie/infoutili/comearrivare.html',
    controller: 'comearrivareCtrl'
  })
  .state('chiese', {
    cache: false,
    url: '/chiese',
    templateUrl: 'templates/Categorie/infoutili/chiese.html',
    controller: 'chieseCtrl'
  })
  .state('chiesepaese', {
    cache: false,
    url: '/chiesepaese',
    templateUrl: 'templates/Categorie/infoutili/chiesepaese.html',
    controller: 'chiesepaeseCtrl'
  })
  .state('chieseischia', {
    cache: false,
    url: '/chieseischia',
    templateUrl: 'templates/Categorie/infoutili/chieseischia.html',
    controller: 'chieseischiaCtrl'
  })
  .state('chieselacco', {
    cache: false,
    url: '/chieselacco',
    templateUrl: 'templates/Categorie/infoutili/chieselacco.html',
    controller: 'chieselaccoCtrl'
  })
  .state('chiesebarano', {
    cache: false,
    url: '/chiesebarano',
    templateUrl: 'templates/Categorie/infoutili/chiesebarano.html',
    controller: 'chiesebaranoCtrl'
  })
  .state('chieseserrara', {
    cache: false,
    url: '/chieseserrara',
    templateUrl: 'templates/Categorie/infoutili/chieseserrara.html',
    controller: 'chieseserraraCtrl'
  })
  .state('chieseforio', {
    cache: false,
    url: '/chieseforio',
    templateUrl: 'templates/Categorie/infoutili/chieseforio.html',
    controller: 'chieseforioCtrl'
  })
  .state('chieseterme', {
    cache: false,
    url: '/chieseterme',
    templateUrl: 'templates/Categorie/infoutili/chieseterme.html',
    controller: 'chiesetermeCtrl'
  })
  //fine info
  //meteo
  .state('meteo', {
    cache: false,
    url: '/meteo',
    templateUrl: 'templates/Categorie/meteo/meteo.html',
    controller: 'meteoCtrl'
  })
  //fine meteo
  //NOLEGGIO
  .state('noleggio', {
    cache: false,
    url: '/noleggio',
    templateUrl: 'templates/Categorie/Noleggio/noleggio.html',
    controller: 'noleggioCtrl'
  })
  .state('auto', {
    cache: false,
    url: '/auto',
    templateUrl: 'templates/Categorie/Noleggio/auto.html',
    controller: 'autoCtrl'
  })
  .state('barche', {
    cache: false,
    url: '/barche',
    templateUrl: 'templates/Categorie/Noleggio/barche.html',
    controller: 'barcheCtrl'
  })
  .state('bici', {
    cache: false,
    url: '/bici',
    templateUrl: 'templates/Categorie/Noleggio/bici.html',
    controller: 'biciCtrl'
  })
  .state('gommoni', {
    cache: false,
    url: '/gommoni',
    templateUrl: 'templates/Categorie/Noleggio/gommoni.html',
    controller: 'gommoniCtrl'
  })

  .state('motorette', {
    cache: false,
    url: '/motorette',
    templateUrl: 'templates/Categorie/Noleggio/motorette.html',
    controller: 'motoretteCtrl'
  })

  //FINE NOLEGGIO

  //DORMIRE
  .state('dormire', {
    cache: false,
    url: '/dormire',
    templateUrl: 'templates/Categorie/Dormire/dormire.html',
    controller: 'dormireCtrl'
  })
  .state('2stelle', {
    cache: false,
    url: '/2stelle',
    templateUrl: 'templates/Categorie/Dormire/2stelle.html',
    controller: '2stelleCtrl'
  })
  .state('3stelle', {
    cache: false,
    url: '/3stelle',
    templateUrl: 'templates/Categorie/Dormire/3stelle.html',
    controller: '3stelleCtrl'
  })
  .state('4stelle', {
    cache: false,
    url: '/4stelle',
    templateUrl: 'templates/Categorie/Dormire/4stelle.html',
    controller: '4stelleCtrl'
  })
  .state('5stelle', {
    cache: false,
    url: '/5stelle',
    templateUrl: 'templates/Categorie/Dormire/5stelle.html',
    controller: '5stelleCtrl'
  })
  .state('beb', {
    cache: false,
    url: '/beb',
    templateUrl: 'templates/Categorie/Dormire/beb.html',
    controller: 'bebCtrl'
  })
  .state('camping', {
    cache: false,
    url: '/camping',
    templateUrl: 'templates/Categorie/Dormire/camping.html',
    controller: 'campingCtrl'
  })
  .state('casavacanza', {
    cache: false,
    url: '/casavacanza',
    templateUrl: 'templates/Categorie/Dormire/casavacanza.html',
    controller: 'casavacanzaCtrl'
  })


  //FINE DORMIRE
 //eventi
 .state('eventiisola', {
  cache: false,
  url: '/eventiisola',
  templateUrl: 'templates/Categorie/Eventi/eventi.html',
  controller: 'eventiisolaCtrl'
})

 .state('ischia', {
    cache: false,
    url: '/ischia',
    templateUrl: 'templates/Categorie/Eventi/ischia.html',
    controller: 'ischiaCtrl'
  })
  .state('barano', {
    cache: false,
    url: '/barano',
    templateUrl: 'templates/Categorie/Eventi/barano.html',
    controller: 'baranoCtrl'
  })
  .state('casamicciola', {
    cache: false,
    url: '/casamicciola',
    templateUrl: 'templates/Categorie/Eventi/casamicciola.html',
    controller: 'casamicciolaCtrl'
  })
 
  .state('serrara', {
    cache: false,
    url: '/serrara',
    templateUrl: 'templates/Categorie/Eventi/serrara.html',
    controller: 'serraraCtrl'
  })
 
  .state('forio', {
    cache: false,
    url: '/forio',
    templateUrl: 'templates/Categorie/Eventi/forio.html',
    controller: 'forioCtrl'
  })
  .state('laccoameno', {
    cache: false,
    url: '/laccoameno',
    templateUrl: 'templates/Categorie/Eventi/laccoameno.html',
    controller: 'laccoamenoCtrl'
  })
 
 
  //fine eventi
  //PARCHI
  .state('lidi', {
    cache: false,
    url: '/lidi',
    templateUrl: 'templates/Categorie/Spiagge/lidi.html',
    controller: 'lidiCtrl'
  })
  .state('spiagge', {
    cache: false,
    url: '/spiagge',
    templateUrl: 'templates/Categorie/Spiagge/spiagge.html',
    controller: 'spiaggeCtrl'
  })
  .state('parchi', {
    cache: false,
    url: '/parchi',
    templateUrl: 'templates/Categorie/Spiagge/parchi.html',
    controller: 'parchiCtrl'
  })
  //FINE PARCHI

   //SPOSIAMOCI
   
   .state('nozze', {
    cache: false,
    url: '/nozze',
    templateUrl: 'templates/Categorie/Sposiamoci/nozze.html',
    controller: 'nozzeCtrl'
  })
  
  //FINE SPOSIAMOCI
   //BY NIGHT

   .state('night', {
    cache: false,
    url: '/night',
    templateUrl: 'templates/Categorie/Night/night.html',
    controller: 'nightCtrl'
  })
  
  //FINE BY NIGHT

   //BEAUTY
   .state('beauty', {
    cache: false,
    url: '/beauty',
    templateUrl: 'templates/Categorie/Beauty/beauty.html',
    controller: 'beautyCtrl'
  })
   .state('centri', {
    cache: false,
    url: '/centri',
    templateUrl: 'templates/Categorie/Beauty/centri.html',
    controller: 'centriCtrl'
  })
  .state('hairuomo', {
    cache: false,
    url: '/hairuomo',
    templateUrl: 'templates/Categorie/Beauty/hairuomo.html',
    controller: 'hairuomoCtrl'
  })
  .state('hairdonna', {
    cache: false,
    url: '/hairdonna',
    templateUrl: 'templates/Categorie/Beauty/hairdonna.html',
    controller: 'hairdonnaCtrl'
  })
  .state('piercing', {
    cache: false,
    url: '/piercing',
    templateUrl: 'templates/Categorie/Beauty/piercing.html',
    controller: 'piercingCtrl'
  })
  .state('solarium', {
    cache: false,
    url: '/solarium',
    templateUrl: 'templates/Categorie/Beauty/solarium.html',
    controller: 'solariumCtrl'
  })
  .state('spa', {
    cache: false,
    url: '/spa',
    templateUrl: 'templates/Categorie/Beauty/spa.html',
    controller: 'spaCtrl'
  })
  .state('tatoo', {
    cache: false,
    url: '/tatoo',
    templateUrl: 'templates/Categorie/Beauty/tatoo.html',
    controller: 'tatooCtrl'
  })
  //FINE BEAUTY
  //sanitari
  .state('sanitari', {
    cache: false,
    url: '/sanitari',
    templateUrl: 'templates/Categorie/sanitari/sanitari.html',
    controller: 'sanitariCtrl'
  })
  .state('ambulanze', {
    cache: false,
    url: '/ambulanze',
    templateUrl: 'templates/Categorie/sanitari/ambulanze.html',
    controller: 'ambulanzeCtrl'
  })
  .state('farmacie', {
    cache: false,
    url: '/farmacie',
    templateUrl: 'templates/Categorie/sanitari/farmacie.html',
    controller: 'farmacieCtrl'
  })
  .state('guardiamedica', {
    cache: false,
    url: '/guardiamedica',
    templateUrl: 'templates/Categorie/sanitari/guardiamedica.html',
    controller: 'guardiamedicaCtrl'
  })
  .state('ospedali', {
    cache: false,
    url: '/ospedali',
    templateUrl: 'templates/Categorie/sanitari/ospedali.html',
    controller: 'ospedaliCtrl'
  })
  .state('volontariato', {
    cache: false,
    url: '/volontariato',
    templateUrl: 'templates/Categorie/sanitari/volontariato.html',
    controller: 'volontariatoCtrl'
  })
  //fine sanitari
//CASA
.state('casa', {
  cache: false,
  url: '/casa',
  templateUrl: 'templates/Categorie/Casa/casa.html',
  controller: 'casaCtrl'
})
.state('agenzie', {
  cache: false,
  url: '/agenzie',
  templateUrl: 'templates/Categorie/Casa/agenzie.html',
  controller: 'agenzieCtrl'
})
.state('arredo', {
  cache: false,
  url: '/arredo',
  templateUrl: 'templates/Categorie/Casa/arredo.html',
  controller: 'arredoCtrl'
})
.state('edilizia', {
  cache: false,
  url: '/edilizia',
  templateUrl: 'templates/Categorie/Casa/edilizia.html',
  controller: 'ediliziaCtrl'
})
.state('domicilio', {
  cache: false,
  url: '/domicilio',
  templateUrl: 'templates/Categorie/Casa/domicilio.html',
  controller: 'domicilioCtrl'
})
.state('lavanderie', {
  cache: false,
  url: '/lavanderie',
  templateUrl: 'templates/Categorie/Casa/lavanderie.html',
  controller: 'lavanderieCtrl'
})
.state('articoli', {
  cache: false,
  url: '/articoli',
  templateUrl: 'templates/Categorie/Casa/articoli.html',
  controller: 'articoliCtrl'
})
//FINE CASA
  //TERMALI
  .state('termali', {
    cache: false,
    url: '/termali',
    templateUrl: 'templates/Categorie/Termali/termali.html',
    controller: 'termaliCtrl'
  })
  //FINE TERMALI
  // autosoccorso
  .state('autosoccorso', {
    cache: false,
    url: '/autosoccorso',
    templateUrl: 'templates/Categorie/Autosoccorso/autosoccorso.html',
    controller: 'autosoccorsoCtrl'
  })
  .state('meccanico', {
    cache: false,
    url: '/meccanico',
    templateUrl: 'templates/Categorie/Autosoccorso/meccanico.html',
    controller: 'meccanicoCtrl'
  })
  .state('carrozziere', {
    cache: false,
    url: '/carrozziere',
    templateUrl: 'templates/Categorie/Autosoccorso/carrozziere.html',
    controller: 'carrozziereCtrl'
  })
  .state('elettrauto', {
    cache: false,
    url: '/elettrauto',
    templateUrl: 'templates/Categorie/Autosoccorso/elettrauto.html',
    controller: 'elettrautoCtrl'
  })
  .state('assicurazioneauto', {
    cache: false,
    url: '/assicurazioneauto',
    templateUrl: 'templates/Categorie/Autosoccorso/assicurazioneauto.html',
    controller: 'assicurazioneautoCtrl'
  })
  // fine autosoccorso
  //ELETTRONICA
  .state('elettronica', {
    cache: false,
    url: '/elettronica',
    templateUrl: 'templates/Categorie/Elettronica/elettronica.html',
    controller: 'elettronicaCtrl'
  })
  .state('telefonia', {
    cache: false,
    url: '/telefonia',
    templateUrl: 'templates/Categorie/Elettronica/telefonia.html',
    controller: 'telefoniaCtrl'
  })
  .state('computer', {
    cache: false,
    url: '/computer',
    templateUrl: 'templates/Categorie/Elettronica/computer.html',
    controller: 'computerCtrl'
  })
  .state('games', {
    cache: false,
    url: '/games',
    templateUrl: 'templates/Categorie/Elettronica/games.html',
    controller: 'gamesCtrl'
  })
  .state('elettrodomestici', {
    cache: false,
    url: '/elettrodomestici',
    templateUrl: 'templates/Categorie/Elettronica/elettrodomestici.html',
    controller: 'elettrodomesticiCtrl'
  })
  .state('eassistenza', {
    cache: false,
    url: '/eassistenza',
    templateUrl: 'templates/Categorie/Elettronica/eassistenza.html',
    controller: 'eassistenzaCtrl'
  })
  //FINE ELETTRONICA
  //INFO
  .state('info', {
    cache: false,
    url: '/info',
    templateUrl: 'templates/Categorie/Info/info.html',
    controller: 'infoCtrl'
  })
  
   //FINE INFO
    //wifi
  .state('wifi', {
    cache: false,
    url: '/wifi',
    templateUrl: 'templates/Categorie/Wifi/wifi.html',
    controller: 'wifiCtrl'
  })
   //FINE wifi
      //gite
  .state('gite', {
    cache: false,
    url: '/gite',
    templateUrl: 'templates/Categorie/Gite/gite.html',
    controller: 'giteCtrl'
  })
   //FINE gite
    //4 zampe
    .state('zampe', {
      cache: false,
      url: '/zampe',
      templateUrl: 'templates/Categorie/4zampe/zampe.html',
      controller: 'zampeCtrl'
    })
  .state('veterinari', {
    cache: false,
    url: '/veterinari',
    templateUrl: 'templates/Categorie/4zampe/veterinari.html',
    controller: 'veterinariCtrl'
  })
  .state('4zampenegozi', {
    cache: false,
    url: '/4zampenegozi',
    templateUrl: 'templates/Categorie/4zampe/4zampenegozi.html',
    controller: '4zampenegoziCtrl'
  })
   //FINE 4 zampe
    //SERVizi
    .state('servizi', {
      cache: false,
      url: '/servizi',
      templateUrl: 'templates/Categorie/Servizi/servizi.html',
      controller: 'serviziCtrl'
    })
  .state('banche', {
    cache: false,
    url: '/banche',
    templateUrl: 'templates/Categorie/Servizi/banche.html',
    controller: 'bancheCtrl'
  })
  .state('poste', {
    cache: false,
    url: '/poste',
    templateUrl: 'templates/Categorie/Servizi/poste.html',
    controller: 'posteCtrl'
  })
  .state('viaggi', {
    cache: false,
    url: '/viaggi',
    templateUrl: 'templates/Categorie/Servizi/viaggi.html',
    controller: 'viaggiCtrl'
  })
  .state('polizze', {
    cache: false,
    url: '/polizze',
    templateUrl: 'templates/Categorie/Servizi/polizze.html',
    controller: 'polizzeCtrl'
  })
  .state('eventi', {
    cache: false,
    url: '/eventi',
    templateUrl: 'templates/Categorie/Servizi/eventi.html',
    controller: 'eventiCtrl'
  })
  .state('pubblicita', {
    cache: false,
    url: '/pubblicita',
    templateUrl: 'templates/Categorie/Servizi/pubblicita.html',
    controller: 'pubblicitaCtrl'
  })
   //FINE SERVizi
   // porti
   .state('porti', {
    cache: false,
    url: '/porti',
    templateUrl: 'templates/Categorie/porti/porti.html',
    controller: 'portiCtrl'
  })
 
   // fine porti
   //ricette
   .state('ricette', {
    cache: false,
    url: '/ricette',
    templateUrl: 'templates/Categorie/mangiare/ricette.html',
    controller: 'ricetteCtrl'
  })
  .state('secondipiatti', {
    cache: false,
    url: '/secondipiatti',
    templateUrl: 'templates/Categorie/mangiare/secondipiatti.html',
    controller: 'secondipiattiCtrl'
  })
  .state('primipiatti', {
    cache: false,
    url: '/primipiatti',
    templateUrl: 'templates/Categorie/mangiare/primipiatti.html',
    controller: 'primipiattiCtrl'
  })
  .state('dolci', {
    cache: false,
    url: '/dolci',
    templateUrl: 'templates/Categorie/mangiare/dolci.html',
    controller: 'dolciCtrl'
  })
   //fine ricette
   // monumenti
   .state('monumenti', {
    cache: false,
    url: '/monumenti',
    templateUrl: 'templates/Categorie/Monumenti/monumenti.html',
    controller: 'monumentiCtrl'
  })
  .state('monumentiischia', {
    cache: false,
    url: '/monumentiischia',
    templateUrl: 'templates/Categorie/Monumenti/monumentiischia.html',
    controller: 'monumentiischiaCtrl'
  })
  .state('monumentibarano', {
    cache: false,
    url: '/monumentibarano',
    templateUrl: 'templates/Categorie/Monumenti/monumentibarano.html',
    controller: 'monumentibaranoCtrl'
  })
  .state('monumentilaccoameno', {
    cache: false,
    url: '/monumentilaccoameno',
    templateUrl: 'templates/Categorie/Monumenti/monumentilaccoameno.html',
    controller: 'monumentilaccoamenoCtrl'
  })
  .state('monumentiforio', {
    cache: false,
    url: '/monumentiforio',
    templateUrl: 'templates/Categorie/Monumenti/monumentiforio.html',
    controller: 'monumentiforioCtrl'
  })
  .state('monumenticasamicciola', {
    cache: false,
    url: '/monumenticasamicciola',
    templateUrl: 'templates/Categorie/Monumenti/monumenticasamicciola.html',
    controller: 'monumenticasamicciolaCtrl'
  })
   // fine monumenti
    //CINEMA
  .state('cinema', {
    cache: false,
    url: '/cinema',
    templateUrl: 'templates/Categorie/Cinema/cinema.html',
    controller: 'cinemaCtrl'
  })
   //FINE CINEMA
      //scommesse
  .state('scommesse', {
    cache: false,
    url: '/scommesse',
    templateUrl: 'templates/Categorie/Scommesse/scommesse.html',
    controller: 'scommesseCtrl'
  })
   //FINE scommesse
   //SPORT

   .state('sport', {
    cache: false,
    url: '/sport',
    templateUrl: 'templates/Categorie/Sport/sport.html',
    controller: 'sportCtrl'
  })
  
  //FINE SPORT
  //TEMPO LIBERI
  .state('libero', {
    cache: false,
    url: '/libero',
    templateUrl: 'templates/Categorie/Tempo/libero.html',
    controller: 'liberoCtrl'
  })
  //FINE TEMPO LIBERO

  .state('register', {
    cache: false,
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })

  .state('aVISNazionale', {
    url: '/page8',
    templateUrl: 'templates/aVISNazionale.html',
    controller: 'aVISNazionaleCtrl'
  })

  .state('contatti', {
    url: '/contatti',
    templateUrl: 'templates/contatti.html',
    controller: 'contattiCtrl'
  })

  .state('profilo', {
    cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/profilo',
    templateUrl: 'templates/profilo.html',
    controller: 'profiloCtrl'
  })


   .state('sondaggio', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/sondaggio',
    templateUrl: 'templates/sondaggio.html',
    controller: 'SondaggioCtrl'
  })

   .state('poltrona', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/poltrona',
    templateUrl: 'templates/poltrona.html',
    controller: 'PoltronaCtrl'
  })

   .state('questionario', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/questionario',
    templateUrl: 'templates/questionario.html',
    controller: 'QuestionarioCtrl'
  })

   .state('rientra', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/rientra',
    templateUrl: 'templates/rientra.html',
    controller: 'RientraCtrl'
  })

     .state('domanda1', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/domanda1',
    templateUrl: 'templates/domanda1.html',
    controller: 'Domanda1Ctrl'
  })

       .state('ringraziamenti', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/ringraziamenti',
    templateUrl: 'templates/ringraziamenti.html',
    controller: 'RingraziamentiCtrl'
  })

   .state('pausa', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/pausa',
    templateUrl: 'templates/pausa.html',
    controller: 'PausaCtrl'
  })


   .state('reset', {
   cache: false, /*sulle pagine che devono essere popolati con dati bisogna metterlo altrimenti esce il profilo bianco!*/
    url: '/reset',
    templateUrl: 'templates/reset.html',
    controller: 'ResetCtrl'
  })
/*controller('onairCtrl', function($scope, $http, $interval) {
	 $interval(function() {

	  $http.get('http://mr-magoo.enjinia.it/api/live-info').success(function(data) {
        $scope.myData = data;});*/


  .state('notizia', {
        url: '/notizia/:notiziaID',
        templateUrl: 'templates/notizia.html',
        controller: function($http, $scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.notiziaID;
            console.log($scope.id);
            //$scope.stories = [];
            //console.log($scope.stories)
            $http.get('http://avis-nicosia.enjinia.it/article_son.php?id='+$scope.id)
              .success(function(response) {
                //angular.forEach(response, function(child) {
                  //$scope.stories.push(child);
                //});
                $scope.myData = response;
                console.log($scope.myData);
              });


        }
    });

$urlRouterProvider.otherwise('/avis_nicosia')


});
