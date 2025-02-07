const playButton = document.querySelector('button')
const computerScoreLog = document.querySelector('.compS')
const humanScoreLog = document.querySelector('.humS')
const logContainer = document.querySelector('.logContainer')
const select = document.querySelector ("select")

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;
let roundWinner;
let gameWinner;

select.addEventListener('change', function () {
humanChoice = select.value
})

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    
    switch (randomNumber) {
        case 0 :
            computerChoice = "rock";
             break;
        
        case 1:
            computerChoice = "paper";
             break;

        case 2 :
            computerChoice = "scissors";
             break; 
    }

}

function determineWinner (humanChoice,computerC) {
    if (humanChoice === computerC) {
        roundWinner = "draw"
    }
    else if 
    ((humanChoice === "rock" && computerC === "paper") || (humanChoice === "paper" && computerC === "scissors")) {
        roundWinner = "computer"
    }
    else { roundWinner = "human"}
}
function updateScore (winner) {
    switch (winner) {
        case 'human':
            humanScore +=1 
            break;
        
        case 'computer' :
            computerScore +=1
            break;

        case 'draw' :
            break;
    }
}

function updateScoreLogs (){
    computerScoreLog.textContent = computerScore;
    humanScoreLog.textContent = humanScore;
}

function createRoundLog (humC, compC, roundWinner) {
    const record = document.createElement('li');
    if (roundWinner === 'draw') {
         record.textContent= `You played ${humC}, and computer played ${compC}. it's a draw`
    }
    else {
    record.textContent= `You played ${humC}, and computer played ${compC}. ${roundWinner} wins the round.`
    }
    logContainer.appendChild(record);
}

function reset () {
    humanScore = 0;
    computerScore = 0;
    humanChoice = '';
    computerChoice = '';
    logContainer.innerHTML = '';
    playButton.textContent = 'Play!'
}

function declareWinner () {
    if (humanScore === 3) {
        gameWinner = 'human';
        alert ('Hurray! you won!')
    }
    else if (computerScore === 3) {
        gameWinner = 'computer'
        alert ('Hard luck! computer wins!')
    }
    const winner = document.createElement ('div');
        winner.textContent = `Game over! winner is ${gameWinner}`;
        logContainer.appendChild(winner);
    
}