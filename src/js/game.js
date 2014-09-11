
// Declare app level module which depends on filters, and services
var mg=angular.module('mg', ['ngRoute','mg.directives']);
mg.config(["$routeProvider",function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'start.html',
        controller: StartCtrl
      })
      .when('/play',{
        templateUrl:'scence.html',
        controller:ScenceCtrl
      })
      .otherwise({
        redirectTo: '/start'
      });
}]);

mg.value('AppName','Memory Matching');