// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("what color do u like? 😈\n", (color) => {
//     console.log(`Hey there ${color}!`);
//   readline.close();
// });

import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'list',
      name: 'typeOfColor',
      message: 'what color do u like? 😈',
      choices: ['red', 'black', 'white','purple'],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.typeOfColor);
  });