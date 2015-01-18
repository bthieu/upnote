/**
 * Created by inu on 12/28/2014.
 */
/* jshint latedef: nofunc */
(function() {
  'use strict';

  angular.module('unComponents')
    //.controller('UNCalendarController', UNCalendarController)
    .directive('unCalendar', unCalendar);

  //function UNCalendarController() {
  //  var vm = this;
  //  vm.getDaysOfMonth = getDaysOfMonth;
  //
  //  function getDaysOfMonth(monthIndex, yearNumber) {
  //    return 'test';
  //  }
  //}

  function unCalendar() {
    return {
      restrict: 'AE',
      scope: {},
      //controller:  UNCalendarController,
      templateUrl: 'views/unCalendar.html',
      link: function(scope, element, attrs) {
        console.log('un calendar');
      }
    };
  }
})();
