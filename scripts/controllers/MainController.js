/**
 * Created by inu on 12/28/2014.
 */
/* jshint latedef: nofunc */
(function () {
  'use strict';

  angular.module('upNoteApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope) {
    var vm = this;
    vm.test = 'controller text';
    $scope.test = 'scope text';
  }
})();
