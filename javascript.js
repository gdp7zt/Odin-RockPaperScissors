let playerScore = 0;
let computerScore = 0;

const buttonRock = document.getElementById('rock');
buttonRock.addEventListener('click', () => {
    playRound('rock')
    });

const buttonPaper = document.getElementById('paper');
buttonPaper.addEventListener('click', () => {
    playRound('paper')
    });

const buttonScissors = document.getElementById('scissors');
buttonScissors.addEventListener('click', () => {
    playRound('scissors')
    });

const resetButton = document.getElementById('restart');
resetButton.addEventListener('click', () => {
    resetGame();
});

const results = document.querySelector('#results');

const score = document.querySelector('#score');

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

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        showResults("You tie! You both chose " + playerSelection);
        showScore();
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            showResults("You lose! Paper beats Rock");
            computerScore += 1;
        }
        else{
            showResults("You win! Rock beats Scissors");
            playerScore += 1;
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            showResults("You lose! Scissors beats paper");
            computerScore += 1;
        }
        else{
            showResults("You win! Paper beats rock");
            playerScore += 1;
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            showResults("You lose! Rock beats scissors");
            computerScore += 1;
        }
        else{
            showResults("You win! Scissors beats paper");
            playerScore += 1;
        }
    }
    showScore();
    if(gameOver()){
        if (playerScore === 5){
            score.textContent = `You win with a score of ${playerScore} to ${computerScore}`;
        }
        else{
            score.textContent = `You lose with a score of ${computerScore} to ${playerScore}`;
        }
        restartGame();
    }
}

function showScore(){
    score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
}

function showResults(string){
    results.textContent = string;
}

function gameOver(){
    return playerScore === 5 || computerScore === 5;
}

function restartGame(){
    location.reload();
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    score.textContent = "Player: 0 Computer: 0";
}
