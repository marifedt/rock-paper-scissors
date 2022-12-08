const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const scores = document.querySelector('.score');

const pick = ['ROCK', 'PAPER', 'SCISSORS'];
let userScore = 0, compScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function reset(){
    userScore = 0;
    compScore = 0;
    setTimeout(() => {
        scores.textContent = "You: 0 - Computer: 0";
        result.textContent = "";
    }, 3000);
}
function checkScore(){
    const result = document.querySelector('.result');
    if(userScore === 5 || compScore === 5){
        result.textContent = "";
        if(userScore > compScore){
            result.textContent += "You Win against Computer! Congratulations!";
        } else{
            result.textContent += "You Lose against Computer! Better Luck Next Time!";
        }

        result.textContent +=" Game will Reset!";
        reset();
    }
}

function playRound(e) {
    let compSelect = getComputerChoice();
    let playerSelect = e.target.name.toUpperCase();
    let msg;

    switch (playerSelect) {
        case 'ROCK':
            if(pick[compSelect] === 'SCISSORS'){
                msg = "You Win! Rock beats Scissors";
                userScore += 1;
            } else if(pick[compSelect] === 'ROCK'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Paper beats Rock";
                compScore += 1;
            }
            break;
        case 'PAPER':
            if(pick[compSelect] === 'ROCK'){
                msg = "You Win! Paper beats Rock";
                userScore += 1;
            } else if(pick[compSelect] === 'PAPER'){
                msg = "It is a tie!";
            } else{
                msg = "You Lose! Scissors beats Paper";
                compScore += 1;
            }
            break;
        case 'SCISSORS':
            if(pick[compSelect] === 'PAPER'){
                msg = "You Win! Scissors beats Paper";
                userScore += 1;
            } else if(pick[compSelect] === 'SCISSORS'){
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
    result.textContent = msg;
    scores.textContent = `You: ${userScore}  - Computer: ${compScore}`;

    checkScore();
}

buttons.forEach(button => button.addEventListener('click', playRound));








