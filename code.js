const playButton = document.querySelector('button')
const computerScoreLog = document.querySelector('.compS')
const humanScoreLog = document.querySelector('.humS')
const log = document.querySelector('.log')
const select = document.querySelector ("select")

let humanScore = 0;
let computerScore = 0;

let humanChoice;

select.addEventListener('change', function () {
humanChoice = select.value
})

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    
    switch (randomNumber) {
        case 0 :
            return "rock";
            
        
        case 1:
            return "paper";
           

        case 2 :
            return "scissors";
               
    }

}

function determineWinner (humanC,computerC) {
    if (humanC === computerC) {
        return "draw"
    }
    else if 
    ((humanC === "rock" && computerC === "paper") || (humanC === "paper" && computerC === "scissors")) {
        return "computer"
    }
    else { return "human"}
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
