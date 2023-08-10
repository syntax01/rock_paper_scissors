function getComputerChoice() {

    randomValue = Math.ceil(Math.random() * 3);
    switch(randomValue) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
    
}

function playGame(playerSelection, computerSelection) {
    
    let playerSelectionU = playerSelection.toUpperCase();
    let computerSelectionU = computerSelection.toUpperCase();
    let playerWin = false;

    if(playerSelectionU === computerSelectionU) {
        return `Tie game! ${playerSelection}s all around.`
    }

    switch(playerSelectionU) {
        case 'ROCK':
            playerWin = computerSelectionU === 'SCISSORS';
            break;
        case 'PAPER':
            playerWin = computerSelectionU === 'ROCK';
            break;
        case 'SCISSORS':
            playerWin = computerSelectionU === 'PAPER';
            break;
    }

    let msgWinLose;
    let msgThisBeatsThat;

    if(playerWin) {
        msgWinLose = 'Win!';
        msgThisBeatsThat = `${playerSelection} beats ${computerSelection}.`;
    } else {
        msgWinLose = 'Lose.';
        msgThisBeatsThat = `${computerSelection} beats ${playerSelection}!`;
    }
    
    return `You ${msgWinLose} ${msgThisBeatsThat}`

    
}

let msgPrompt = "Rock, paper, or scissors?";

for(i = 0; i < 5; i++) {
    console.log('Game #' + (i + 1));
    
    let playerSelection = prompt(msgPrompt);
    let computerSelection = getComputerChoice();
    let result = playGame(playerSelection, computerSelection);
    
    console.log(result);
}


