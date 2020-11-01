const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;

    if (Array.isArray(arr)) {
      count ++;
      arr.forEach((element) => {
        count = Math.max(this.calculateDepth(element) + 1, count);
      });
      
    return count;
    } else {
      return count;
    }
  }
};