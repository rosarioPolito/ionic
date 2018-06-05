angular.module('app.controllers', [])


/*LOGIN CONTROLLER*/
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $http,$ionicHistory) {
  $ionicHistory.clearCache();
  $ionicHistory.clearHistory();
    $scope.data = {}; /*istanzio l'array vuoto che accoglie i dati dal form della viev di login*/
    console.log($scope.data);/*metto a video in console il contenuto dell'array*/
    if ($scope.data == null){
      state.go('sponsor');
    }
/* questo è il sistema di login*/
    $scope.login = function() {
      /*come prima cosa con http.get verifico le credenziali col backend. Il backend mi restituisce
      un token se è tutto a posto oppure un token pari a ZERO se KO */
      console.log($scope.data);
      $scope.data.password = "&password="+$scope.data.password
      var $url = "http://avis-nicosia.enjinia.it/validate.php?email="+$scope.data.username+$scope.data.password;
      console.log($url);
      $http.get($url)
        .success(function(response) {
          $scope.myData = response; /*scope.myData è la variabile dove viene conservato il result del backend*/
          console.log($scope.myData);
          localStorage.setItem ('token',$scope.myData.token);
          localStorage.setItem ('id',$scope.myData.uid);
          var $myToken = localStorage.getItem ('token');
          console.log($myToken);
        /*  window.plugins.PushbotsPlugin.getRegistrationId(function(token){
              console.log("Registration Id:" + token);
          });*/
          //var $myDevice = localStorage.getItem ('device');
          //console.log ($myDevice);
/*qui richiamo il servizio di login che ho definito nei service */
          LoginService.loginUser($scope.myData.token).success(function(data) {
          $state.go('profilo',{cache: false});
                }).error(function(data) {
                  var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Controlla le tue credenziali'
                  });
          });
                                    });
      /*  LoginService.loginUser($scope.myData.token).success(function(data) {
            $state.go('aVISNazionale');
              }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
              title: 'Login failed!',
              template: 'Please check your credentials!'
                });
        });*/
    }





})

/*PROFILE CONTROLLER*/
.controller('profiloCtrl', function($http, $scope, $state, $ionicHistory,LogoutService) {
  $ionicHistory.clearCache();
  $ionicHistory.clearHistory();
  $myToken = localStorage.getItem ('token');
  var $id = localStorage.getItem('id');
  console.log($myToken);
  console.log($id);
  if ( $id == null || $id.lenght === 0 || $id === undefined){
    $state.go('sponsor');
  }
  if ( $myToken == null || $myToken === undefined || $myToken.lenght === 0){
    console.log($myToken);
    $state.go('sponsor')
  } else {
    //var $id = localStorage.getItem('id');
    console.log($id);
    var $url = "http://avis-nicosia.enjinia.it/getuser.php?id="+$id;
    console.log($url);
    var $urldon = "http://avis-nicosia.enjinia.it/getdonation.php?id="+$id;
    console.log($urldon);
    $http.get($url).success(function(response){
    $scope.myProfile = response;
    console.log($scope.myProfile);
      $scope.myDonation = [];
      console.log($scope.myDonation);
      $http.get($urldon).success(function(response){
        angular.forEach (response,function(child){
          $scope.myDonation.push(child);
        })
        //$scope.myDonation = response;
        //console.log($scope.myDonation);
      }

          )
                                              }
                            );
  }/*end ELSE */
/* funzione di logout  legata al bottone logout del profilo*/
  $scope.logout = function(){
      console.log($id);
      console.log($myToken);
      LogoutService.logoutUser($id,$myToken);
      $state.go('tabsController.chiSiamo');
                          }
  })

.controller('leUltimeNotizieCtrl', function($http, $scope) {
  $scope.stories = [];
  $http.get('http://avis-nicosia.enjinia.it/all_article.php')
    .success(function(response) {
      angular.forEach(response, function(child) {
        $scope.stories.push(child);
      });
    });
  })

  .controller('dateDonazioniCtrl', function($http, $scope) {
    $scope.donations = [];
    $http.get('http://avis-nicosia.enjinia.it/getdate.php')
      .success(function(response) {
        angular.forEach(response, function(child) {
          $scope.donations.push(child);
        });
      });
    })

  .controller('chiSiamoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {


  }])

  .controller('iProssimiEventiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, $http) {


  }])


.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('laPreghieraDelDonatoreCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('sponsorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aVISNazionaleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('contattiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
