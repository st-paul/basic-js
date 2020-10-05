const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultChain: [],
  getLength() {
    return this.resultChain.length;
  },
  addLink(value) {
    this.resultChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position >= this.getLength() || position <= 0) {
      this.resultChain = [];
      throw new Error();
    } else {
      this.resultChain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.resultChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.resultChain.join('~~');
    this.resultChain = [];
    return result;
  }
};

module.exports = chainMaker;
