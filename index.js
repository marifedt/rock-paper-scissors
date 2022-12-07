// for (let i = 0; i < 10; i++) {
//     let choice = getComputerChoice();
//     console.log(choice);
// } Testing the input

let choice = getComputerChoice();

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}