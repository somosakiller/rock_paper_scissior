let computerPlay = () => {
    let move = ['rock', 'paper', 'scissor'];
    return move[Math.floor(Math.random()*move.length)];
}



let playRound = (choice) => {
    const computerSelection = computerPlay();

    if ((choice.toLowerCase() == 'rock') && (computerSelection.toLocaleLowerCase() == 'paper')) {
        return 'You lose! Paper beats rock.'
    }

    if ((choice.toLowerCase() == 'rock') && (computerSelection.toLocaleLowerCase() == 'scissor')) {
        return 'You win! rock beats scissor.'
    }

    if ((choice.toLowerCase() == 'paper') && (computerSelection.toLocaleLowerCase() == 'scissor')) {
        return 'You lose! scissor beats paper.'
    }

    if ((choice.toLowerCase() == 'paper') && (computerSelection.toLocaleLowerCase() == 'rock')) {
        return 'You win! paper beats rock.'
    }

    if ((choice.toLowerCase() == 'scissor') && (computerSelection.toLocaleLowerCase() == 'paper')) {
        return 'You win! scissor beats paper.'
    }

    if ((choice.toLowerCase() == 'scissor') && (computerSelection.toLocaleLowerCase() == 'rock')) {
        return 'You lose! rock beats scissor.'
    }

    if (choice.toLowerCase() == computerSelection.toLocaleLowerCase()) {
        return 'You tie!'
    }

}

let promptUser = () => {
    let decision = prompt('enter choice');
    return playRound(decision);
}



let game = () => {
    let playerWinCount=0;
    let aiWinCount= 0;
    for (let i=0; i<5; i++){
        let round = promptUser();
        if (round.includes('win')) {
            playerWinCount+=1;
        }
        if (round.includes('lose')) {
            aiWinCount+=1;
        }

    }
    
    return 'player won ' + playerWinCount + ' times and AI won ' + aiWinCount + ' times';
     
}