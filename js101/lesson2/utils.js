const readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getInput() {
  return readlineSync.question();
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function toPrice(num) {
  let price = num.toFixed(2);
  let priceWithCommas = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return '$' + priceWithCommas
};

module.exports = {
  prompt: prompt,
  getInput: getInput,
  invalidNumber: invalidNumber,
  toPrice: toPrice
}