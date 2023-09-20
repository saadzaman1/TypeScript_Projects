import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
let score = 0;
let play = true;
(async () => {
    await showBanner('Guessing Game', 'THIS GAME MADE BY SAAD ZAMAN', "green");
})();
async function GuessNumber() {
    while (play) {
        let guessGame = Math.ceil((Math.random() * 2) + 1);
        let answer = await inquirer.prompt([{
                name: "userNumber",
                type: "number",
                message: "Enter Any Number From 1 to 3"
            }]);
        if (answer.userNumber === guessGame) {
            console.log(chalk.greenBright("You Guess Correct !"));
            score += 10;
            console.log(chalk.yellow(`${score}`));
        }
        else {
            console.log(chalk.red("Wrong Number Try Again"));
            play = false;
        }
        const playAgain = await inquirer.prompt([{
                name: "again",
                type: "confirm",
                message: "Do you want to play again?"
            }]);
        if (playAgain.again) {
            play = true;
        }
        else {
            play = false;
            console.log(chalk.blue("Thanks for playing!"));
        }
    }
}
;
//1 to 5
setTimeout(() => {
    GuessNumber();
}, 1000);
