const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let result = '';

if (options.repeatTimes == null) options.repeatTimes = 1;
if (options.additionRepeatTimes == null) options.additionRepeatTimes = 1;
if (options.separator == null) options.separator = '+';
if (options.additionSeparator == null) options.additionSeparator = '|';
if (options.addition === undefined) options.additionRepeatTimes = '';

for (let i = 1; i <= options.repeatTimes; i++) {
  if (i < options.repeatTimes) {
  result += str;
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      if (j < options.additionRepeatTimes) {
        result += `${options.addition}${options.additionSeparator}`;
        } else if (j === options.additionRepeatTimes) {
            result += options.addition;
        }
    }
  result += options.separator;

  } else if (i === options.repeatTimes) {
    result += str;
    for (let k = 1; k <= options.additionRepeatTimes; k++) {
      if (k < options.additionRepeatTimes) {
        result += `${options.addition}${options.additionSeparator}`;
      } else if (k === options.additionRepeatTimes) {
            result += options.addition;
      }
    }
  }
}
return result;
};
  