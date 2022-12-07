const pick = ['ROCK', 'PAPER', 'SCISSORS'];
let userScore = 0, compScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    let msg;
    switch (playerSelection) {
        case 'ROCK':
            if(pick[computerSelection] === 'SCISSORS'){
                msg = "You Win! Rock beats Scissors";
                userScore += 1;
            } else if(pick[computerSelection] === 'ROCK'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Paper beats Rock";
                compScore += 1;
            }
            break;
        case 'PAPER':
            if(pick[computerSelection] === 'ROCK'){
                msg = "You Win! Paper beats Rock";
                userScore += 1;
            } else if(pick[computerSelection] === 'PAPER'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Scissors beats Paper";
                compScore += 1;
            }
            break;
        case 'SCISSORS':
            if(pick[computerSelection] === 'PAPER'){
                msg = "You Win! Scissors beats Paper";
                userScore += 1;
            } else if(pick[computerSelection] === 'SCISSORS'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Rock beats Scissors";
                compScore += 1;
            }
            break;
        default:
            msg = "Invalid choice. Choose between Rock, Paper or Scissors"
            break;
    }

    return msg;
}

function game(){
    let compChoice = getComputerChoice();
    let userPick = prompt("Rock, Paper or Scissors? ").toUpperCase();
    console.log(playRound(userPick, compChoice));
}

for (let i = 0; i < 5; i++) {
    game();
}

if(userScore === compScore){
    console.log("Result for 5 rounds: It is a tie!");
} else if(userScore > compScore){
    console.log("Result for 5 rounds: You Win! Congratulations!");
} else{
    console.log("Result for 5 rounds: You Lose! Better Luck Next Time!");
}








