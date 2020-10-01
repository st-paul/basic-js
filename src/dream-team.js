const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let resultStr = [];
    if (Array.isArray(members) === true) {
        members.some((val) => typeof val === 'string' ? val.trim().toUpperCase().split('').findIndex((el, index) => el === el[0] ? resultStr.push(el) : false) : false);
    return resultStr.sort().join('');
  } return false;
};
