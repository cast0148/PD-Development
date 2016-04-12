// app.js

var App = angular.module('routingDemoApp', ['ui.router', 'ngAnimate', 'ngMaterial']);

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/step1")

  $stateProvider
    .state('step1', { //State demonstrating Nested views
      url: "/step1"
      , templateUrl: "views/partial-step1.html"
    })

  .state('step2', { //State demonstrating Nested views
    url: "/step2"
    , templateUrl: "views/partial-step2.html"
  })


  .state('step3', { //State demonstrating Nested views
    url: "/step3"
    , templateUrl: "views/partial-step3.html"
  })

  .state('step1/nested', { //nested state [products is the nested state of business state]
      url: "/step1.1"
      , templateUrl: "views/step1.1.html"
        //                            controller: function($scope){
        //                                $scope.products = ["Computer", "Printers", "Phones", "Bags"];
        //                            }
    })
    .state('step1/nested2', { //nested state [services is the nested state of business state]
      url: "/step1.2"
      , templateUrl: "views/step1.2.html"
        //                            controller: function($scope){
        //                                $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
        //                            }
    })

  //                        .state('p', {//State demonstrating Multiple,named views
  //                            url: "/portfolio",
  //                            views: {
  //                                ""  :    { templateUrl: "portfolio.html" },
  //                                "view1@portfolio": { template: "Write whatever you want, it's your virtual company." },
  //                                "view2@portfolio": { templateUrl: "clients.html" ,
  //                                    controller: function($scope){
  //                                            $scope.clients = ["HP", "IBM", "MicroSoft"];
  //                                    }
  //                                }
  //                            }
  //                        })
            }]);


