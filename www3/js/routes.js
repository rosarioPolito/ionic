angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('tabsController.chiSiamo', {
    url: '/avis_nicosia',
    views: {
      'tab1': {
        templateUrl: 'templates/chiSiamo.html',
        controller: 'chiSiamoCtrl'
      }
    }
  })

  .state('tabsController.iProssimiEventi', {
    url: '/calendario',
    views: {
      'tab2': {
        templateUrl: 'templates/iProssimiEventi.html',
        controller: 'dateDonazioniCtrl'
      }
    }
  })

  .state('tabsController.leUltimeNotizie', {
    url: '/notizie',
    views: {
      'tab3': {
        templateUrl: 'templates/leUltimeNotizie.html',
        controller: 'leUltimeNotizieCtrl'
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

  .state('sponsor', {
    cache: false,
    url: '/sponsor',
    templateUrl: 'templates/sponsor.html',
    controller: 'LoginCtrl'
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

$urlRouterProvider.otherwise('/page1/avis_nicosia')


});
