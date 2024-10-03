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
    
}

