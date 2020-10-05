const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let TurnNum = Math.pow(2, disksNumber) - 1;
  let turnSpeed = Math.floor((TurnNum * 3600) / turnsSpeed);
  let resultObj = {turns: TurnNum, seconds: turnSpeed};
  return resultObj;
};
