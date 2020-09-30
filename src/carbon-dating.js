const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string' 
        && sampleActivity.trim().length !== 0 
        && /^\d*\.?\d+$/.test(sampleActivity) 
        && parseFloat(sampleActivity) > 0 
        &&  parseFloat(sampleActivity) < 15) {
          let ActNum = parseFloat(sampleActivity);
          let k = Math.LN2 / HALF_LIFE_PERIOD;
            let result = Math.log((MODERN_ACTIVITY / ActNum)) / k;
              return Math.ceil(result);
  } else {
    return false;
  }
}
