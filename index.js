function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    let msg;
    switch (playerSelection) {
        case 'ROCK':
            if(pick[computerSelection] === 'SCISSORS'){
                msg = "You Win! Rock beats Scissors";
            } else if(pick[computerSelection] === 'ROCK'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Paper beats Rock";
            }
            break;
        case 'PAPER':
            if(pick[computerSelection] === 'ROCK'){
                msg = "You Win! Paper beats Rock";
            } else if(pick[computerSelection] === 'PAPER'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Scissors beats Paper";
            }
            break;
        case 'SCISSORS':
            if(pick[computerSelection] === 'PAPER'){
                msg = "You Win! Scissors beats Paper";
            } else if(pick[computerSelection] === 'SCISSORS'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Rock beats Scissors";
            }
            break;
        default:
            msg = "Invalid choice. Choose between Rock, Paper or Scissors"
            break;
    }

    return msg;
}


const pick = ['ROCK', 'PAPER', 'SCISSORS'];

let compChoice = getComputerChoice();
let userPick = prompt("Rock, Paper or Scissors? ").toUpperCase();

console.log(playRound(userPick, compChoice));


