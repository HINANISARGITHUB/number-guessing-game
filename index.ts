#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber =Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
       name:"userGuessedNumber",
       type: "number",
       message: (chalk.greenBright("Please guessed a number between 1-6:")), 
    },
])
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.cyanBright("Congratulation! you guessed right number"));
}
else {
    console.log(chalk.redBright("You guessed wrong number"));
}
