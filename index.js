// for (let i = 0; i < 10; i++) {
//     let choice = getComputerChoice();
//     console.log(choice);
// } Testing the input
const pick = ['ROCK', 'PAPER', 'SCISSORS'];

let compChoice = getComputerChoice();
let userPick = prompt("Rock, Paper or Scissors? ").toUpperCase();

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
