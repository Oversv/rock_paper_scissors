//Require
const colors = require('colors/safe');
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const lose = colors.red('You lose.');
const win = colors.green('You win.');

console.log("=================================");
console.log("Welcome to Rock, Paper, Scissors!");
console.log("=================================");

function handleUserResponse(response) {

    response = response.toLowerCase().trim();

    let computer; // 1 = rock, 2 = paper, 3 = scissors 
    let you = 0;
    let machine = 0;

    //Random selection for the computer
    computer = Math.floor(Math.random() * (4 - 1) + 1);

    switch (response) {
        case 'rock':
            if (computer === 1) console.log("The computer chooses rock, draw.");
            else if (computer === 2) {
                console.log(`The computer chooses paper, ${lose}`);
                machine++;
            } else {
                console.log(`The computer chooses scissors, ${win}`);
                you++;
            }
            break;

        case 'paper':
            if (computer === 1) {
                console.log(`The computer chooses rock, ${win}`);
                you++;
            } else if (computer === 2) console.log("The computer chooses paper, draw.");
            else {
                console.log(`The computer chooses scissors, ${lose}`);
                machine++;
            }
            break;
        case 'scissors':
            if (computer === 1) {
                console.log(`The computer chooses rock, ${lose}`);
                machine++;
            } else if (computer === 2) {
                console.log(`The computer chooses paper, ${win}`);
                you++;
            } else console.log("The computer chooses scissors, draw.");
            break;
        default:
            console.log(colors.red("Your answer is wrong, try again."));
            break;
    }
    console.log(`Result: You ${you} - Computer ${machine}`);

    readline.close();
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);