/**
 * Created by inu on 12/28/2014.
 */
/* jshint latedef: nofunc */
(function () {
  'use strict';

  angular.module('upNoteApp')
    .controller('DemoController', DemoController);

  DemoController.$inject = ['$scope'];

  function DemoController($scope) {
    $scope.test = 'demo test';
  }
})();
