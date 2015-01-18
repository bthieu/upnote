/**
 * Created by inu on 12/31/2014.
 */
/* jshint latedef: nofunc */
(function () {
  'use strict';

  angular.module('unServices')
    .factory('unCalendarService', unCalendarService);

  function unCalendarService() {

    var unCalendarServiceObj = {
      getMonthInformation: getMonthInformation,
      getDateListWithHighlight: getDateListWithHighlight,
      getDateList: getDateList

    };

    return unCalendarServiceObj;

    ////////////////////////////////////////////////////
    ///////////function definition section//////////////
    ////////////////////////////////////////////////////

    /**
     * Get information of dates from input month & year
     * information include data of the date.
     * @returns {Array} list of dates and their information in the month(s)
     */
    function getDateListWithHighlight(inputMonth,inputYear) {


      //use some service to connect to server and get list of date that have data
      //if we don't have database, use mockhttp
      var datesWithData = {};

      //first, get date list without data information
      var dateList = getDateList(inputMonth, inputYear, datesWithData);

      //second, get data of dates


      return dateList;
    }

    /**
     * Get information of dates from input month & year
     * no addition data include
     * @param inputMonth
     * @param inputYear
     * @param highlightDates
     * @returns {Array} date list of the month
     */
    function getDateList(inputMonth, inputYear, highlightDates) {
      var i, len, date;
      var dateListOfMonth = [];

      //get some
      var monthInformation = getMonthInformation(inputMonth, inputYear);
      var previousMonthInformation = getMonthInformation(inputMonth - 1, inputYear);

      var highlightDateArray = highlightDates || {};

      //build date list for target month
      for(i = 0; i < monthInformation.lastDate; i++ ) {
        date = {
          day: (monthInformation.firstDay + i)%7,
          date: i + 1
        };
        if(highlightDateArray[i+1]) {
          date.highlight = true;
        }
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
      return dateListOfMonth;

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
