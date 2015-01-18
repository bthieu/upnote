/**
 * Created by inu on 12/31/2014.
 */
/* jshint latedef: nofunc */
(function () {
  'use strict';

  angular.module('unServices')
    .factory('unCalendarService', unCalendarService);

  function unCalendarService() {
    var targetMonth, targetYear, numberOfMonth;

    var unCalendarServiceObj = {
      setTargetValues:setTargetValues,
      getTargetMonth: getTargetMonth,
      getTargetYear: getTargetYear,
      getNumberOfMonth: getNumberOfMonth,

      getMonthInformation: getMonthInformation,

      getDateList: getDateList,
      getDateListWithoutData: getDateListWithoutData

    };

    return unCalendarServiceObj;

    ////////////////////////////////////////////////////
    ///////////function definition section//////////////
    ////////////////////////////////////////////////////

    /**
     * Set some necessary values for other progress
     * @param inputMonth
     * @param inputYear
     * @param inputNumberOfMonth
     */
    function setTargetValues(inputMonth, inputYear, inputNumberOfMonth) {
      targetMonth = inputMonth;
      targetYear = inputYear;
      numberOfMonth = inputNumberOfMonth;
    }

    /**
     * Get target month
     * @returns {*}
     */
    function getTargetMonth() {
      return targetMonth;
    }

    /**
     * Get target year
     * @returns {*}
     */
    function getTargetYear() {
      return targetYear;
    }

    /**
     * Get target month
     * @returns {*}
     */
    function getNumberOfMonth() {
      return numberOfMonth;
    }

    /**
     * Get information of dates from input month & year
     * information include data of the date.
     * @returns {{object}} list of dates and their information in the month(s)
     */
    function getDateList() {

      //first, get date list without data information
      var dateList = getDateListWithoutData();

      //second, get data of dates


      return dateList;
    }

    /**
     * Get information of dates from input month & year
     * no addition data include
     * @returns {{object}} date list of the month
     */
    function getDateListWithoutData() {

      var i, len, date;
      var dateListOfMonth = [];
      var dateList = {};

      //get some
      var monthInformation = getMonthInformation(targetMonth, targetYear);
      var previousMonthInformation = getMonthInformation(targetMonth - 1, targetYear);

      //build date list for target month
      for(i = 0; i < monthInformation.lastDate; i++ ) {
        date = {
          day: (monthInformation.firstDay + i)%7,
          date: i + 1
        };
        dateListOfMonth.push(date);
      }

      //build date list for the month before
      for(i = 0; i <= previousMonthInformation.lastDay; i++) {
        date = {
          day: (previousMonthInformation.lastDay - i)%7,
          date: previousMonthInformation.lastDate - i,
          out: true
        };
        dateListOfMonth.unshift(date);
      }

      //build date list for the month after
      for(i = 1, len = dateListOfMonth.length ; i + len <= 42; i++) {
        date = {
          day:(monthInformation.lastDay + i )% 7,
          date: i,
          out: true
        };
        dateListOfMonth.push(date);
      }

      //wrap date list with a key, in this case the key is a combination for target month & year
      dateList[targetYear + '_' + targetMonth] = dateListOfMonth;
      return dateList;

    }

    /**
     *
     * @param inputMonth
     * @param inputYear
     * @returns {{firstDay: number, firstDate: number, lastDay: number, lastDate: number}}
     */
    function getMonthInformation(inputMonth, inputYear) {
      var firstDateObj = new Date(inputYear, inputMonth, 1);
      var lastDateObj = new Date(inputYear, inputMonth + 1, 0);
      return {
        firstDay: firstDateObj.getDay(),
        firstDate: firstDateObj.getDate(),
        lastDay: lastDateObj.getDay(),
        lastDate: lastDateObj.getDate()
      };
    }
  }
})();
