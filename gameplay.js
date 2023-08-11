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

function initiateGame() {


    let msgPrompt = "Rock, paper, or scissors?";


    console.log('Game #' + (i + 1));
        
    let playerSelection = prompt(msgPrompt);
    if(!playerSelection) {
        console.log('No response... exiting game');
        return;
    }
    let computerSelection = getComputerChoice();
    let result = playGame(playerSelection, computerSelection);

    console.log(result);

}

// Get all of the button elements in the div with the playButtons class
const buttons = document.querySelectorAll("div.playButtons button");
const elResult = document.querySelector("#result");
// Add click event to buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        if(1==2) {
            // this, in this context, is the button element
            // which is the thing the action/event is being called on
            console.log(this);
            console.log(event); 
            console.log(event.target);
        }
        // Play the game with the selected option
        const playerSelection = this.textContent;
        const computerSelection = getComputerChoice();
        const result = playGame(playerSelection, computerSelection);
        
        elResult.textContent = result;
    })
})
