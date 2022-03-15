let round="";
let div = document.createElement('div');
let container = document.querySelector('.results');
const btn = document.querySelectorAll('button');
let playerWinCount=0;
let aiWinCount= 0;
let tieCount=0;
let roundCounter = 0;

let clickButton = ()=>{
    btn.forEach(button =>{
        button.addEventListener('click', ()=>{
            if (roundCounter<5){
                //play one round
                let result = playRound(button.textContent);
                //send result to counter function
                resultCounter(result);
                //display results in div
                divDisplay(playerWinCount,aiWinCount);
                roundCounter++;
            }
            if (roundCounter==5) {
                divWinner(playerWinCount,aiWinCount);
            }
        })
    })
}
clickButton();

let computerPlay = () => {
    let move = ['rock', 'paper', 'scissor'];
    return move[Math.floor(Math.random()*move.length)];
}



let playRound = (choice) => {
    const computerSelection = computerPlay();

    if ((choice.toLowerCase() == 'rock') && (computerSelection.toLocaleLowerCase() == 'paper')) {
        return 'You lose! Paper beats rock.';
    }

    if ((choice.toLowerCase() == 'rock') && (computerSelection.toLocaleLowerCase() == 'scissor')) {
        return 'You win! rock beats scissor.';
    }

    if ((choice.toLowerCase() == 'paper') && (computerSelection.toLocaleLowerCase() == 'scissor')) {
        return 'You lose! scissor beats paper.'; 
    }

    if ((choice.toLowerCase() == 'paper') && (computerSelection.toLocaleLowerCase() == 'rock')) {
        return 'You win! paper beats rock.'; 
    }

    if ((choice.toLowerCase() == 'scissor') && (computerSelection.toLocaleLowerCase() == 'paper')) {
        return 'You win! scissor beats paper.';
    }

    if ((choice.toLowerCase() == 'scissor') && (computerSelection.toLocaleLowerCase() == 'rock')) {
        return 'You lose! rock beats scissor.';
    }

    if (choice.toLowerCase() == computerSelection.toLocaleLowerCase()) {
        return 'You tie!';
    }

}

let resultCounter = (result) => {
    if (result.includes('win')) {
        playerWinCount+=1;
    }
    if (result.includes('lose')) {
        aiWinCount+=1;
    }
    if (result.includes('tie')) {
        tieCount+=1;
    }
}

let divDisplay = (playerWinCount,aiWinCount) =>{
    console.log(div);
    div.textContent = `Wins: ${playerWinCount}    Loss: ${aiWinCount}    Tie:${tieCount} `; 
    container.appendChild(div);
}

let divWinner = (playerWinCount, aiWinCount) =>{
    if(playerWinCount>aiWinCount){
        div.textContent = `Player Won`;
        container.appendChild(div);
    }
    else if (aiWinCount>playerWinCount){
        div.textContent = `AI Won`;
        container.appendChild(div); 
    }
    else {
        div.textContent = `You Tie`;
        container.appendChild(div); 
    }
}