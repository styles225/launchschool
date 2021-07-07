// todo - return to internationalization feature
// https://launchschool.com/lessons/64655364/assignments/a6efeb33
const readline = require('readline-sync');
const calcMessages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt( calcMessages.welcome.toLocaleString() );

do {

  prompt( calcMessages.firstNum.toLocaleString() );
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt( calcMessages.invalidNum.toLocaleString() );
    number1 = readline.question();
  }

  prompt( calcMessages.secondNum.toLocaleString() );
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt( calcMessages.invalidNum.toLocaleString() );
    number2 = readline.question();
  }

  prompt( calcMessages.whichOperation.toLocaleString() );
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt( calcMessages.invalidOperator.toLocaleString() );
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${ calcMessages.result.toLocaleString() } ${output}`);

  prompt( calcMessages.restart.toLocaleString() );
  
} while ( readline.question() === 'yes' );