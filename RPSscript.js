function getComputerChoice() {
    
    let result = '';
    let rng = Math.floor(Math.random() * 3 + 1);

    if (rng === 1) {
        result = 'rock';
    } else if (rng === 2) {
        result = 'paper';
    } else if (rng === 3) {
        result = 'scissors';
    }
    return result;
}

function getHumanChoice() {
    let input = prompt('Get input:','').toLowerCase();
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let result = '';
    
    if (humanChoice === computerChoice) {
        result = `It\'s a draw. Human score is ${humanScore}. Computer score is ${computerScore}.`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        result = `You lose. PC paper beats Rock. Human score is ${humanScore}. Computer score is ${computerScore}.`;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        result = `You won. Rock beats PC scissors. Human score is ${humanScore}. Computer score is ${computerScore}.`;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        result = `You won. Paper beats PC rock. Human score is ${humanScore}. Computer score is ${computerScore}.`;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        result = `You lose. PC scissors beats paper. Human score is ${humanScore}. Computer score is ${computerScore}.`;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        result = `You lose. PC rock beats scissors. Human score is ${humanScore}. Computer score is ${computerScore}.`;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        result = `You won. Scissors beats PC paper. Human score is ${humanScore}. Computer score is ${computerScore}.`;
    }
    return result;
}

function playGame(n) {

    let finalResult = '';
    if (n === 0) {
        if (humanScore === computerScore) {
            finalResult = `Final Result: It\'s a draw. Human is ${humanScore}. Computer is ${computerScore}.`;
        } else if (humanScore > computerScore) {
            finalResult = `Final Result: Human won (${humanScore}). Computer lose (${computerScore}).`;
        } else if (humanScore < computerScore) {
            finalResult = `Final Result: Human lose (${humanScore}). Computer won (${computerScore}).`;
        }
        return console.log(finalResult);
    }
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    playGame(n-1);
}

playGame(5);
