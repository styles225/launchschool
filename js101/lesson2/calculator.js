const readlineSync = require("readline-sync");

function say(string) {
  console.log(string);
}

function getOperand(sequence) {

  say('What\'s the ' + sequence + ' number?');
  let operand = Number( readlineSync.question() );

  return operand;

}

function getOperator() {

  say('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  return readlineSync.question();

}

function performOperation(output) {

  say(`The result is: ${output}`);

}



say(`Welcome to the calculator!`);

let number1 = getOperand('first');
let number2 = getOperand('second');

let operator = getOperator();

switch(operator) {

  case '1':
    performOperation( number1 + number2 );
  break;
  
  case '2':
    performOperation( number1 - number2 );
  break;
  
  case '3':
    performOperation( number1 * number2 );
  break;
  
  case '4':
    performOperation( number1 / number2 );
  break;

  default:
    operator = getOperator();
  break;

}