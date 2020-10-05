const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resultArr = [];
  let index = 0;
  if (Array.isArray(arr)) {
    while (index < arr.length) {
      if (arr[index] === '--discard-next') {
        arr[index + 2] ===  '--discard-prev' || arr[index + 2] ==  '--double-prev' ? index += 3 : index += 2;
      } else if (arr[index] === ('--discard-prev')) {
        index > 0 ? (resultArr.pop(), index++) : index++;
      } else if (arr[index] === '--double-next') {
        index < arr.length - 1 ? (resultArr.push(arr[index + 1]), index++) : index++;
      } else if (arr[index] === '--double-prev') {
        index > 0 ? (resultArr.push(arr[index - 1]), index++) : index++;
      } else {
        resultArr.push(arr[index]);
        index++;
      }
    }
  } else {
    throw new Error('THROWN');
  }
  return resultArr;
};
