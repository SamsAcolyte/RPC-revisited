const playButton = document.querySelector('.playButton')
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

function determineWinner (humanC,computerC) {
    if (humanC === computerC) {
        roundWinner = "draw"
    }
    else if 
    ((humanC === "rock" && computerC === "paper") || (humanC === "paper" && computerC === "scissors")) {
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

function createRoundLog (humC, compC, roundW) {
    const record = document.createElement('li');
    if (roundW === 'draw') {
         record.textContent= `You played ${humC}, and computer played ${compC}. it's a draw`
    }
    else {
    record.textContent= `You played ${humC}, and computer played ${compC}. ${roundW} wins the round.`
    }
    logContainer.appendChild(record);
}


function declareWinner() {
    if (humanScore === 3) {
        gameWinner = 'human';

        const winner = document.createElement('div');
        winner.textContent = `Game over! Winner is ${gameWinner}`;
        logContainer.appendChild(winner);

        // Delay alert to allow DOM update
        setTimeout(() => {
            alert('Hurray! You won!');
        }, 100); // 100 milliseconds delay
    }
    else if (computerScore === 3) {
        gameWinner = 'computer';

        const winner = document.createElement('div');
        winner.textContent = `Game over! Winner is ${gameWinner}`;
        logContainer.appendChild(winner);

        // Delay alert to allow DOM update
        setTimeout(() => {
            alert('Hard luck! Computer wins!');
        }, 100); // 100 milliseconds delay
    }

    playButton.textContent = "Play again!";
}


function reset () {
    humanScore = 0;
    computerScore = 0;
    humanChoice = '';
    computerChoice = '';
    logContainer.innerHTML = '';
    playButton.textContent = 'Play!'
    computerScoreLog.textContent = computerScore;
    humanScoreLog.textContent = humanScore;
    select.value = 'didNotChoose'
}

function play () { 
    if (humanScore === 3 || computerScore === 3) {
        reset();
        return;
    }

    if (!humanChoice || humanChoice === 'didNotChoose' || select.value === 'didNotChoose') {
        alert ('You did not choose!');
        return;
    }
    else {
        getComputerChoice();
        determineWinner (humanChoice, computerChoice);
        updateScore(roundWinner);
        updateScoreLogs();
        createRoundLog(humanChoice, computerChoice, roundWinner);
        
        if ( humanScore === 3 || computerScore ===3) {
            declareWinner();
        }
        
    }

}

playButton.addEventListener('click', play);