'use strict';

var MONTHS = ['Invalid', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var SHORTMONTHS = MONTHS.map(function (month) {
  return month.substr(0, 3);
});
var DAYS = ['Invalid', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var SHORTDAYS = DAYS.map(function (day) {
  return day.substr(0, 3);
});

var format = function format(dt, _format, isUTC) {
  if (_format === void 0) {
    _format = 'Y-m-dTH:i:s.vP';
  }

  if (isUTC === void 0) {
    isUTC = false;
  }

  if (!(dt instanceof Date)) {
    dt = new Date(dt === undefined ? Date.now() : dt);
  }

  if (isNaN(dt.getTime())) {
    return '';
  }

  var year, month, date, day;
  var hour, minute, second, msec, offset;

  if (isUTC) {
    year = dt.getUTCFullYear();
    month = dt.getUTCMonth();
    date = dt.getUTCDate();
    day = dt.getUTCDay();
    hour = dt.getUTCHours();
    minute = dt.getUTCMinutes();
    second = dt.getUTCSeconds();
    msec = dt.getUTCMilliseconds();
    offset = 0;
  } else {
    year = dt.getFullYear();
    month = dt.getMonth();
    date = dt.getDate();
    day = dt.getDay();
    hour = dt.getHours();
    minute = dt.getMinutes();
    second = dt.getSeconds();
    msec = dt.getMilliseconds();
    offset = dt.getTimezoneOffset() / 60 * 100;
  }

  ++day;
  ++month; // date

  var absYear = Math.abs(year); // time

  var shortHour = hour > 12 ? hour - 12 : hour || 12; // replace

  return _format.replace(/\\?[a-zA-Z\\]/g, function (ch) {
    switch (ch) {
      // date
      case 'y':
        {
          var shortYear = parseInt(absYear % 100);
          return shortYear > 9 ? shortYear : '0' + shortYear;
        }

      case 'Y':
        {
          var prefix = '';
          var abs = absYear;

          while (abs < 1000) {
            prefix += '0';
            abs *= 10;
          }

          return prefix + absYear;
        }

      case 'm':
        return month > 9 ? month : '0' + month;

      case 'n':
        return month;

      case 'M':
        return MONTHS[month];

      case 'F':
        return SHORTMONTHS[month];

      case 'd':
        return date > 9 ? date : '0' + date;

      case 'j':
        return date;

      case 'D':
        return DAYS[day];

      case 'l':
        return SHOTDAYS[day];
      // time

      case 'H':
        return hour > 9 ? hour : "0" + hour;

      case 'h':
        return shortHour > 9 ? shortHour : "0" + shortHour;

      case 'g':
        return shortHour;

      case 'i':
        return minute > 9 ? minute : "0" + minute;

      case 's':
        return second > 9 ? second : "0" + second;

      case 'v':
        {
          var ms = msec.toString();

          while (ms.length < 3) {
            ms = "0" + ms;
          }

          return ms;
        }

      case 'P':
        {
          var off = offset.toString();

          while (off.length < 4) {
            off = "0" + off;
          }

          return "+" + off.substr(0, 2) + ":" + off.substr(2);
        }

      case 'a':
        return hour < 12 ? 'am' : 'pm';

      case 'A':
        return hour < 12 ? 'AM' : 'PM';
    }

    return ch.replace(/^\\/, '');
  });
};

module.exports = format;
