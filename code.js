const playButton = document.querySelector('button')
const computerScore = document.querySelector('.compS')
const humanScore = document.querySelector('.humS')
const log = document.querySelector('.log')
const select = document.querySelector ("select")

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

function getHumanChoice () {

}