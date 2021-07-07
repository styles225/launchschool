const utils = require('./utils');
const loanPrompt = require('./loan-prompt.json');

function getAppInput(message) {

  utils.prompt(message);

  let input = utils.getInput();

  while ( utils.invalidNumber(input) ) {

    utils.prompt(loanPrompt.invalidNumber);
    input = utils.getInput();

  }

  return input;

}

const MONTHS_IN_YEAR = 12;

utils.prompt('Welcome to the loan calculator. Let\'s get started!');

let loanAmt = getAppInput('What is the total loan amount?');
let apr = getAppInput('What is the APR?') / 100;
let monthlyInterestRate = apr / MONTHS_IN_YEAR;
let isYears = getAppInput('Months or Years?\nType 0 for Months.\nType 1 for Years.');
let loanDuration = getAppInput('What is the loan duration?');

if ( +isYears ) {
  // calculate for years
  loanDuration *= MONTHS_IN_YEAR;
}

console.log(apr);

let monthlyPayment = loanAmt * 
                (monthlyInterestRate /
                (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

console.log( utils.toPrice( monthlyPayment ) );

/*
START

PRINT welcome

DO
  PRINT message to get loan amount
WHILE input !== number

SET loan amount

DO
  PRINT message to get APR
WHILE input !== number

SET apr

DO
  PRINT message to set duration in years or months
While input !== number

SET months or years


DO
  PRINT message to get duration
While input !== number

SET duration


IF months
  run calc
ELSE
  run calc

PRINT values

END
*/