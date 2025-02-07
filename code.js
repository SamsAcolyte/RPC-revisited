const playButton = document.querySelector('button')
const computerScoreLog = document.querySelector('.compS')
const humanScoreLog = document.querySelector('.humS')
const log = document.querySelector('.log')
const select = document.querySelector ("select")

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;
let roundWinner;

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
    record.textContent= `You played ${humC}, and computer played ${compC}. ${roundWinner} wins the round.`
    
    log.appendChild(record);
}