const playButton = document.querySelector('.playButton');
const computerScoreLog = document.querySelector('.compS');
const humanScoreLog = document.querySelector('.humS');
const logContainer = document.querySelector('.logContainer');
const select = document.querySelector('select');

let humanScore = 0;
let computerScore = 0;

select.addEventListener('change', () => {
    humanChoice = select.value;
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(humanC, computerC) {
    if (humanC === computerC) return 'draw';
    return (humanC === 'rock' && computerC === 'scissors') ||
           (humanC === 'paper' && computerC === 'rock') ||
           (humanC === 'scissors' && computerC === 'paper')
        ? 'human' : 'computer';
}

function updateScore(winner) {
    if (winner === 'human') humanScore++;
    else if (winner === 'computer') computerScore++;
}

function updateScoreLogs() {
    computerScoreLog.textContent = computerScore;
    humanScoreLog.textContent = humanScore;
}

function createRoundLog(humanC, compC, roundW) {
    const record = document.createElement('li');
    record.textContent = roundW === 'draw' 
        ? `You played ${humanC}, and computer played ${compC}. It's a draw.`
        : `You played ${humanC}, and computer played ${compC}. ${roundW} wins the round.`;
    logContainer.appendChild(record);
}

function declareWinner() {
    if (humanScore === 3 || computerScore === 3) {
        const gameWinner = humanScore === 3 ? 'human' : 'computer';
        const winnerMessage = document.createElement('div');
        winnerMessage.textContent = `Game over! Winner is ${gameWinner}`;
        logContainer.appendChild(winnerMessage);

        setTimeout(() => {
            alert(gameWinner === 'human' ? 'Hurray! You won!' : 'Hard luck! Computer wins!');
        }, 100);
        
        playButton.textContent = 'Play again!';
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    logContainer.innerHTML = '';
    playButton.textContent = 'Play!';
    updateScoreLogs();
    select.value = 'didNotChoose';
}

function play() {
    if (humanScore === 3 || computerScore === 3) {
        resetGame();
        return;
    }

    if (!select.value || select.value === 'didNotChoose') {
        alert('You did not choose!');
        return;
    }
    
    const humanChoice = select.value;
    const computerChoice = getComputerChoice();
    const roundWinner = determineWinner(humanChoice, computerChoice);
    
    updateScore(roundWinner);
    updateScoreLogs();
    createRoundLog(humanChoice, computerChoice, roundWinner);
    
    if (humanScore === 3 || computerScore === 3) {
        declareWinner();
    }
}

playButton.addEventListener('click', play);
