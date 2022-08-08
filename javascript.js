function getComputerChoice() {
    let RPS = Math.floor((Math.random() * 3)) + 1;
    if (RPS === 1){
        return "rock";
    }
    else if (RPS === 2){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)

    if (playerSelection === computerSelection) {
        console.log("You tie! You both chose " + playerSelection);
        return 0;
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            console.log("You lose! Paper beats Rock");
            return -1;
        }
        else{
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            console.log("You lose! Scissors beats paper");
            return -1;
        }
        else{
            console.log("You win! Paper beats rock");
            return 1;
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log("You lose! Rock beats scissors");
            return 1;
        }
        else{
            console.log("You win! Scissors beats paper");
            return 1;
        }
    }
}

function game(){
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock paper or scissors");
        playerScore += playRound(playerSelection, getComputerChoice());   
    }
    if (playerScore > 0) {
        console.log("You win overall!");
    }
    else if (playerScore < 0) {
        console.log("You lose overall!");
    }
    else{
        console.log("It's a tie overall!");
    }
}

game();