

angular.module('app.controllers', [])





  .controller('HomeController', ['$scope', function ($scope) {



  }])

  .controller('SondaggioCtrl', function ($http, $scope, $state, $ionicHistory, $ionicPopup) {

  })
  /*LOGIN CONTROLLER*/
  .controller('LoginCtrl', function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

  })

  /*REGISTER CONTROLLER*/
  .controller('RegisterCtrl', function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


  })


  // POLTRONA CONTROLLER: POPOLA IL DROPDOWN BOX E CONTROLLA SE LA POLTRONA È LIBERA


  .controller('PoltronaCtrl', function ($http, $scope, $state, $ionicHistory, $q, $ionicPopup) {


  })





  /*PROFILE CONTROLLER*/
  .controller('profiloCtrl', function ($http, $scope, $state, $ionicHistory) {

  })

  .controller('leUltimeNotizieCtrl', function ($http, $scope) {

  })


  .controller('chiSiamoCtrl', function ($http, $scope, $state, $ionicHistory, $q, $ionicPopup) {



  })


  .controller('RientraCtrl', function ($http, $scope, $state, $ionicHistory, $q, $ionicPopup) {




  })






  .controller('iProssimiEventiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {


    }])






  .controller('Domanda1Ctrl', function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

  })




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



  .controller('QuestionarioCtrl', function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


  })


  .controller('sponsorCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=artigianato";
      console.log($url);
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) { document.getElementById(id).style.display='none';};
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })

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

  .controller('ResetCtrl', function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
  })


  //MANGIARE 
  .controller('ristoroCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {



    })
  .controller('barCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=bar";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('cantineCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('chilometroCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=km0";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('gelateriaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=gelaterie";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('pasticceriaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=pasticcerie";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('pizzeriaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=pizzerie";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('ristorantiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.data = {};
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=ristoranti";
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };



    })
    // ORARI 

    .controller('ischianapolimolooggiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.data = {};
      $part = "partenza=ischia" 
      $dest = "&destinazione=napoli molo b."
      $giorno = "&domani=1"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      }) 
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
      .controller('ischianapolimolodomaniCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.data = {};
      $part = "partenza=ischia" 
      $dest = "&destinazione=napoli molo b."
      $giorno = "&domani=2"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      }) 
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };})
      .controller('ischianapolimoloCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.data = {};
      $part = "partenza=ischia" 
      $dest = "&destinazione=napoli molo b."
      $giorno = "&domani=0"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })

      .controller('napolimoloischiaoggiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      $scope.data = {};
      $part = "partenza=napoli molo b." 
      $dest = "&destinazione=ischia"
      $giorno = "&domani=1"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })})
      .controller('napolimoloischiadomaniCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      $scope.data = {};
      $part = "partenza=napoli molo b." 
      $dest = "&destinazione=ischia"
      $giorno = "&domani=2"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })})
      .controller('napolimoloischiaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      $scope.data = {};
      $part = "partenza=napoli molo b." 
      $dest = "&destinazione=ischia"
      $giorno = "&domani=0"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })})
      .controller('ischiapozzuolioggiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      $scope.data = {};
      $part = "partenza=ischia" 
      $dest = "&destinazione=pozzuoli"
      $giorno = "&domani=1"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
  
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })})
      .controller('ischiapozzuolidomaniCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
  
      function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
        $scope.controllo = {};
  
        $scope.data = {};
        $part = "partenza=ischia" 
        $dest = "&destinazione=pozzuoli"
        $giorno = "&domani=2"
        var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
        console.log($url);
    
        $http.get($url).success(function (response) {
          $scope.controllo = response;
          console.log($scope.controllo);
        })})
        .controller('ischiapozzuoliCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
    
        function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
          $scope.controllo = {};
    
          $scope.data = {};
          $part = "partenza=ischia" 
          $dest = "&destinazione=pozzuoli"
          $giorno = "&domani=0"
          var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
          console.log($url);
      
          $http.get($url).success(function (response) {
            $scope.controllo = response;
            console.log($scope.controllo);
          })})
          .controller('pozzuoliischiaoggiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
      
          function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
            $scope.controllo = {};
      
            $scope.data = {};
            $part = "partenza=pozzuoli" 
            $dest = "&destinazione=ischia"
            $giorno = "&domani=1"
            var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
            console.log($url);
        
            $http.get($url).success(function (response) {
              $scope.controllo = response;
              console.log($scope.controllo);
            })})
            .controller('pozzuoliischiadomaniCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
        
            function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
              $scope.controllo = {};
        
              $scope.data = {};
              $part = "partenza=pozzuoli" 
              $dest = "&destinazione=ischia"
              $giorno = "&domani=2"
              var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
              console.log($url);
          
              $http.get($url).success(function (response) {
                $scope.controllo = response;
                console.log($scope.controllo);
              })})
              .controller('pozzuoliischiaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
              // You can include any angular dependencies as parameters for this function
              // TIP: Access Route Parameters for your page via $stateParams.parameterName
          
              function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
                $scope.controllo = {};
          
                $scope.data = {};
                $part = "partenza=pozzuoli" 
                $dest = "&destinazione=ischia"
                $giorno = "&domani=0"
                var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
                console.log($url);
            
                $http.get($url).success(function (response) {
                  $scope.controllo = response;
                  console.log($scope.controllo);
                })})
                .controller('ischiaprocidaoggiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
                // You can include any angular dependencies as parameters for this function
                // TIP: Access Route Parameters for your page via $stateParams.parameterName
            
                function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
                  $scope.controllo = {};
            
                  $scope.data = {};
                  $part = "partenza=ischia" 
                  $dest = "&destinazione=procida"
                  $giorno = "&domani=1"
                  var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
                  console.log($url);
              
                  $http.get($url).success(function (response) {
                    $scope.controllo = response;
                    console.log($scope.controllo);
                  })})
                  .controller('ischiaprocidadomaniCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
                  // You can include any angular dependencies as parameters for this function
                  // TIP: Access Route Parameters for your page via $stateParams.parameterName
              
                  function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
                    $scope.controllo = {};
              
                    $scope.data = {};
                    $part = "partenza=ischia" 
                    $dest = "&destinazione=procida"
                    $giorno = "&domani=2"
                    var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
                    console.log($url);
                
                    $http.get($url).success(function (response) {
                      $scope.controllo = response;
                      console.log($scope.controllo);
                    })})
                    .controller('ischiaprocidaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
                    // You can include any angular dependencies as parameters for this function
                    // TIP: Access Route Parameters for your page via $stateParams.parameterName
                
                    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
                      $scope.controllo = {};
                
                      $scope.data = {};
                      $part = "partenza=ischia" 
                      $dest = "&destinazione=procida"
                      $giorno = "&domani=0"
                      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
                      console.log($url);
                  
                      $http.get($url).success(function (response) {
                        $scope.controllo = response;
                        console.log($scope.controllo);
                      })})
                      .controller('procidaischiaoggiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
                      // You can include any angular dependencies as parameters for this function
                      // TIP: Access Route Parameters for your page via $stateParams.parameterName
                  
                      function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
                        $scope.controllo = {};
                  
                        $scope.data = {};
                        $part = "partenza=procida" 
                        $dest = "&destinazione=ischia"
                        $giorno = "&domani=1"
                        var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
                        console.log($url);
                    
                        $http.get($url).success(function (response) {
                          $scope.controllo = response;
                          console.log($scope.controllo);
                        })})
                        .controller('procidaischiadomaniCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
                        // You can include any angular dependencies as parameters for this function
                        // TIP: Access Route Parameters for your page via $stateParams.parameterName
                    
                        function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
                          $scope.controllo = {};
                    
                          $scope.data = {};
                          $part = "partenza=procida" 
                          $dest = "&destinazione=ischia"
                          $giorno = "&domani=2"
                          var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
                          console.log($url);
                      
                          $http.get($url).success(function (response) {
                            $scope.controllo = response;
                            console.log($scope.controllo);
                          })})
                          .controller('procidaischiaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
                          // You can include any angular dependencies as parameters for this function
                          // TIP: Access Route Parameters for your page via $stateParams.parameterName
                      
                          function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
                            $scope.controllo = {};
                      
                            $scope.data = {};
                            $part = "partenza=procida" 
                            $dest = "&destinazione=ischia"
                            $giorno = "&domani=0"
                            var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
                            console.log($url);
                        
                            $http.get($url).success(function (response) {
                              $scope.controllo = response;
                              console.log($scope.controllo);
                            })
                          })

    .controller('listaoraridomaniCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.data = {};
      $partenza = localStorage.getItem('partenza');
      $destinazione = localStorage.getItem('destinazione');
      $part = "partenza=" + $partenza
      $dest = "&destinazione=" + $destinazione
      $giorno = "&domani=2"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })
    .controller('listaorarioggiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.data = {};
      $partenza = localStorage.getItem('partenza');
      $destinazione = localStorage.getItem('destinazione');
      $part = "partenza=" + $partenza
      $dest = "&destinazione=" + $destinazione
      $giorno = "&domani=1"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })
  .controller('listaorariCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.data = {};
      $partenza = localStorage.getItem('partenza');
      $destinazione = localStorage.getItem('destinazione');
      $part = "partenza=" + $partenza
      $dest = "&destinazione=" + $destinazione
      $giorno = "&domani=0"
      var $url = "http://lozioconsiglia.altervista.org/orari.php?" + $part + $dest + $giorno;
      console.log($url);
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })
  .controller('orarioCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any 
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.data = {};
     
      $scope.orario = function () {
        console.log($scope.data);
        console.log("ciao");
        localStorage.setItem('partenza', $scope.data.partenza);
        localStorage.setItem('destinazione', $scope.data.destinazione);
        $state.go('listaorari', { cache: false });
      }
      $scope.oggi = function () {
        console.log($scope.data);
        console.log("ciao");
        localStorage.setItem('partenza', $scope.data.partenza);
        localStorage.setItem('destinazione', $scope.data.destinazione);
        $state.go('listaorarioggi', { cache: false });
      }
      $scope.domani = function () {
        console.log($scope.data);
        console.log("ciao");
        localStorage.setItem('partenza', $scope.data.partenza);
        localStorage.setItem('destinazione', $scope.data.destinazione);
        $state.go('listaoraridomani', { cache: false });
      }
    }
  )
  // FINE ORARI
  .controller('snackCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=snack";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })
  .controller('supermercatiCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=supermercati";
      console.log($url);
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })

  //FINE MANGIARE
  //SHOPPING

  .controller('shoppingCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName


    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };




    })
  .controller('abbigliamentoCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName


    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=abbigliamento";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('calzatureCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=calzature";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })
  .controller('gioielliCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=gioielli";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('otticaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=ottica";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('prodottiCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=prodotti";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('profumeriaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=profumerie";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('souvenirCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=souvenir";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('tabacchiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=tabacchi";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

    })

  //FINE SHOPPING

  //BEAUTY
  .controller('beautyCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('centriCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=centribeauty";
      console.log($url);
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {location.reload(); };
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('hairuomoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=hairuomo";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('hairdonnaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=hairdonna";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('piercingCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=piercing";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('tatooCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=tatoo";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('spaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=spa";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  //FINE BEAUTY
  // CASA
  .controller('casaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('agenzieCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=agenzie";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('arredoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=arredo";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('articoliCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=articolicasa";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('domicilioCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=domicilio";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('lavanderieCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=lavanderie";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('ediliziaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=edilizia";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  //FINE CASA
  // NOLEGGIO
  .controller('noleggioCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('autoCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=automoto";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('barcheCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=barche";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('biciCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=bici";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('gommoniCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName


    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=gommoni";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('motoretteCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=automoto";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })

  //FINE NOLEGGIO
  //autosoccorso
  .controller('autosoccorsoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };


    })

  .controller('meccanicoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=meccanico";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('elettrautoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=elettrauto";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('carrozziereCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=carrozziere";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('assicurazioneautoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=assicurazioneauto";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  //fine autosoccorso
  //ELETTRONICA
  .controller('elettronicaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('telefoniaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {location.reload(); };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=telefonia";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('computerCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=computer";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('elettrodomesticiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=elettrodomestici";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('eassistenzaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=eassistenza";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })

  .controller('gamesCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=games";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })




  // FINE ELETTRONICA
  //INFO
  .controller('infoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=info";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  //FINE INFO
  //CINEMA
  .controller('cinemaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=cinemateatro";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  //FINE CINEMA
  //CINEMA
  .controller('wifiCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=wifi";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  //FINE CINEMA
  //GITE
  .controller('giteCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {location.reload(); };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=gite";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  //FINE GITE
  //orari

  .controller('orariCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  //fine orari
  //info

  .controller('infoutiliCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


    })
  .controller('chieseCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=chiese";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })

  .controller('chieseischiaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=chieseischia";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('chiesebaranoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=chiesebarano";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('chieselaccoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=chieselacco";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('chiesetermeCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=chieseterme";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('chieseserraraCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=chieseserrara";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })

  .controller('chieseforioCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=chieseforio";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('comearrivareCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  //fione info
  //meteo

  .controller('meteoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };


    })
  //fine meteo
    // ricette
    .controller('ricetteCtrl',  
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
    .controller('primipiattiCtrl',  
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function() { location.reload();};
    })
    .controller('secondipiattiCtrl',  
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {location.reload(); };
    })
    .controller('dolciCtrl',  
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {location.reload(); };
    })
    // fine rivette
  // porti
  .controller('portiCtrl',  
  function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
    $scope.click = function(id) {document.getElementById(id).style.display='block'; };

    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
  })

  // fine porti
  // monumenti
  .controller('monumentiCtrl',  
  function ($scope, $ionicPopup, $state, $http, $ionicHistory) { 
    $scope.click = function(id) {document.getElementById(id).style.display='block'; };

  $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
  })
  .controller('monumentiischiaCtrl',  
  function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
    $scope.click = function(id) {document.getElementById(id).style.display='block'; };

  $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
  })
  .controller('monumentibaranoCtrl',  
  function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
    $scope.click = function(id) {document.getElementById(id).style.display='block'; };

  $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
  })
  .controller('monumentiforioCtrl',  
  function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
    $scope.click = function(id) {document.getElementById(id).style.display='block'; };

  $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
  })
  .controller('monumentilaccoamenoCtrl',  
  function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
    $scope.click = function(id) {document.getElementById(id).style.display='block'; };

  $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
  })
  .controller('monumenticasamicciolaCtrl',  
  function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
    $scope.click = function(id) {document.getElementById(id).style.display='block'; };

  $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
  })
  // fine monumenti
  //scommesse
  .controller('scommesseCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=scommesse";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  //FINE scommesse
  //4zampe
  .controller('zampeCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };


    })
  .controller('veterinariCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=veterinari";
      console.log($url);

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('4zampenegoziCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=4zampenegozi";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  //FINE 4zampe
  //eventi
  .controller('eventiisolaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };


    })
  .controller('ischiaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=ischia";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('baranoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=barano";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('forioCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=forio";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('casamicciolaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=casamicciola";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('serraraCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=serrara";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  .controller('laccoamenoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=laccoameno";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  // fine eventi

  //DORMIRE
  .controller('dormireCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('2stelleCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=2stelle";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('3stelleCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=3stelle";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })
  .controller('4stelleCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=4stelle";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('5stelleCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=5stelle";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('bebCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=beb";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('campingCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=camping";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('casavacanzaCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=casavacanza";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })


  //FINE DORMIRE

  //PARCHI

  .controller('lidiCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {location.reload(); };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=lidi";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('parchiCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };


    })
  .controller('spiaggeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

    })


  //FINE PARCHI
  //sanitari
  .controller('sanitariCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };
  
    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('ambulanzeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };
  
    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('ospedaliCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };
  
    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('guardiamedicaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };
  
    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('farmacieCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };
  
    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  .controller('volontariatoCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };
  
    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
    })
  //finesanitari
  //Servizi
  .controller('serviziCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.click = function(id) {document.getElementById(id).style.display='block'; };
  
    $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };



    })
  .controller('bancheCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=banche";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('posteCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=poste";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })

  .controller('viaggiCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=viaggi";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('polizzeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=polizze";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  .controller('eventiCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=eventi";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })

  .controller('pubblicitaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };

      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=pubblicita";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })




  //FINE Servizi
  //TEMPO LIBERO
  .controller('liberoCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName

    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=tempolibero";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })



    })
  // FINE TEMPO LIBERO

  //SPOSIAMOCI
  .controller('nozzeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=nozze";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  //FINE SPOSIAMOCI

  // BY NIGHT
  .controller('nightCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};

      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=night";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  //FINE BYNIGHT

  //SPORT
  .controller('sportCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=sport";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  //FINE SPORT

  //SPORT
  .controller('termaliCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $ionicPopup, $state, $http, $ionicHistory) {
      $scope.controllo = {};


      $scope.click = function(id) {document.getElementById(id).style.display='block'; };

      $scope.clickclose = function(id) {document.getElementById(id).style.display='none'; };
      var $url = "http://www.heartourism.com/old/bin/provacategoria1.php?scateg=terme";
      console.log($url);

      $http.get($url).success(function (response) {
        $scope.controllo = response;
        console.log($scope.controllo);
      })


    })
  //FINE SPORT
  .controller('RingraziamentiCtrl', function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

  })

  .controller('PausaCtrl', function ($scope, $ionicPopup, $state, $http, $ionicHistory) {

  })





