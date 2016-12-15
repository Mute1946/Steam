(function () {

  angular.module('steamApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("TEST");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/summary/', {
        templateUrl: '/summary/summary.view.html',
        controller: 'summaryCtrl',
        controllerAs: 'vm'
      })
      .when('/achievements/', {
        templateUrl: '/achievements/achievements.view.html',
        controller: 'achievementCtrl',
        controllerAs: 'vm'
      })
      .when('/stats/', {
        templateUrl: '/stats/stats.view.html',
        controller: 'statsCtrl',
        controllerAs: 'vm'
      })
      .when('/gamedata/', {
        templateUrl: '/gamedata/gamedata.view.html',
        controller: 'gameCtrl',
        controllerAs: 'vm'
      })      
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('steamApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();