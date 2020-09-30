const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let sumCat = 0;
  backyard.reduce((acc, curval) => curval.reduce((mem, curr) => curr === '^^' ? sumCat++: mem, 0), 0);
  return sumCat;
};
