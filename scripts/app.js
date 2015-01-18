/**
 * Created by inu on 12/28/2014.
 */
(function () {
  'use strict';

  angular
    .module('upNoteApp', [
      'ngRoute',
      'unComponents'
    ])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController',
          controllerAs: 'vm'
        })
        .when('/demo/', {
          templateUrl: 'views/demo.html',
          controller: 'DemoController',
          controllerAs: 'vm'
        });
    }]);

  angular.module('unComponents', []);
  angular.module('unServices',[]);
})();
