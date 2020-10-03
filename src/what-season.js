const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if ( Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error('THROWN');
  } else {
          let valMonth = date.getMonth();
          if (valMonth <= 1 || valMonth == 11) {
              return 'winter';
          }
          if (valMonth <= 4) {
              return 'spring';
          }
          if (valMonth <= 7) {
              return 'summer';
          }
          if (valMonth <= 10) {
              return 'autumn';
          }
        }
}
