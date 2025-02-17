'use strict';

// Write your code here
const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

// console.log(getBullsAndCows('3264', generateRandomNumber()));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const randomNumber = generateRandomNumber();

rl.question('Enter number: ', (userNumber) => {
  if (checkIsValidUserInput(userNumber)) {
    const result = getBullsAndCows(userNumber, randomNumber)
    console.log(`Result: ${result.bulls} bulls and ${result.cows} cows`);

    rl.close();
  } else {
    console.log('Invalid input. Try again.');

    rl.close();
  }
})


