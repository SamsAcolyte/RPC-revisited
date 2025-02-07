const playButton = document.querySelector('.playButton');
const computerScoreLog = document.querySelector('.compS');
const humanScoreLog = document.querySelector('.humS');
const logContainer = document.querySelector('.logContainer');
const select = document.querySelector('select');

let humanScore = 0;
let computerScore = 0;

// Update humanChoice when player selects an option\select.addEventListener('change', () => {
    humanChoice = select.value;
});

// Generate a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner of the round
function determineWinner(humanC, computerC) {
    if (humanC === computerC) return 'draw'; // If choices are the same, it's a draw
    
    // Winning conditions for human
    return (humanC === 'rock' && computerC === 'scissors') ||
           (humanC === 'paper' && computerC === 'rock') ||
           (humanC === 'scissors' && computerC === 'paper')
        ? 'human' : 'computer';
}

// Update the score based on the round winner
function updateScore(winner) {
    if (winner === 'human') humanScore++;
    else if (winner === 'computer') computerScore++;
}

// Update the score display in the UI
function updateScoreLogs() {
    computerScoreLog.textContent = computerScore;
    humanScoreLog.textContent = humanScore;
}

// Create and append a log entry for the round
function createRoundLog(humanC, compC, roundW) {
    const record = document.createElement('li');
    record.textContent = roundW === 'draw' 
        ? `You played ${humanC}, and computer played ${compC}. It's a draw.`
        : `You played ${humanC}, and computer played ${compC}. ${roundW} wins the round.`;
    logContainer.appendChild(record);
}

// Declare the overall winner when a player reaches 3 points
function declareWinner() {
    if (humanScore === 3 || computerScore === 3) {
        const gameWinner = humanScore === 3 ? 'human' : 'computer';
        const winnerMessage = document.createElement('div');
        winnerMessage.textContent = `Game over! Winner is ${gameWinner}`;
        logContainer.appendChild(winnerMessage);

        // Show an alert after a short delay to allow UI update
        setTimeout(() => {
            alert(gameWinner === 'human' ? 'Hurray! You won!' : 'Hard luck! Computer wins!');
        }, 100);
        
        playButton.textContent = 'Play again!';
    }
}

// Reset the game to initial state
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    logContainer.innerHTML = '';
    playButton.textContent = 'Play!';
    updateScoreLogs();
    select.value = 'didNotChoose';
}

// Main function to handle game flow
function play() {
    // If game is over, reset before starting a new one
    if (humanScore === 3 || computerScore === 3) {
        resetGame();
        return;
    }

    // Ensure player has made a selection before playing
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

// Attach event listener to play button
playButton.addEventListener('click', play);
