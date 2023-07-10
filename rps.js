const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resultDiv = document.querySelector(".rpsResults");
const resultText = document.querySelector("#resultText");
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");
let playerScore = 0;
let compScore = 0;
let roundCounter = 0;


const getComputerChoice = function(){
    let choice = ["rock","paper","scissors"];

    return choice[Math.floor(Math.random()*choice.length)];
}


function playRound(playerInput, computerInput){
    computerInput = getComputerChoice();
    let playerInputLowerCase = playerInput.toLowerCase();
    let roundResult = 0;
    let roundRes = 0; //0 lose, 1 win, 2 tie

    if((roundCounter >= 5) && (playerScore > compScore)){
        alert("You win!")
    }
    if((roundCounter >= 5) && (playerScore < compScore)){
        alert("You lose...")
    }
    if((roundCounter >= 5) && (playerScore == compScore)){
        alert("It's a tie!")
    }

    switch (playerInputLowerCase){
        case 'rock':
        case 'rocks':
            if(computerInput == "rock"){
                roundResult = console.log("It's a tie! Rock ties with rock.");
                resultText.textContent = "It's a tie! Rock ties with rock.";
                roundRes = 2;
                roundCounter++;
            }
            else if(computerInput == "paper"){
                roundResult = console.log("You lose! Paper beats rock.");
                resultText.textContent = "You lose! Paper beats rock.";
                roundRes = 0;
                roundCounter++;
                compScore++;
                computerScoreText.textContent = compScore;
            }
            else{
                roundResult = console.log("You win! Rock beats scissors.");
                resultText.textContent = "You win! Rock beats scissors.";
                roundRes = 1;
                roundCounter++;
                playerScore++;
                playerScoreText.textContent = playerScore;
            }
            
            break;

        case 'paper':
        case 'papers':
            if(computerInput == "rock"){
                roundResult = console.log("You win! Paper beats rock.");
                resultText.textContent = "You win! Paper beats rock.";
                roundRes = 1;
                roundCounter++;
                playerScore++;
                playerScoreText.textContent = playerScore;
            }
            else if(computerInput == "paper"){
                roundResult = console.log("It's a tie! Paper ties with paper.");
                resultText.textContent = "It's a tie! Paper ties with paper.";
                roundRes = 2;
                roundCounter++;
            }
            else{
                roundResult = console.log("You lose! Scissors beats paper.");
                resultText.textContent = "You lose! Scissors beats paper.";
                roundRes = 0;
                roundCounter++;
                compScore++;
                computerScoreText.textContent = compScore;
            }
            
            break;

        case 'scissors':
        case 'scissor':
            if(computerInput == "rock"){
                roundResult = console.log("You lose! Rock beats scissors.");
                resultText.textContent = "You lose! Rock beats scissors.";
                roundRes = 0;
                roundCounter++;
                compScore++;
                computerScoreText.textContent = compScore;
            }
            else if(computerInput == "paper"){
                roundResult = console.log("You win! Scissors beats paper.");
                resultText.textContent = "You win! Scissors beats paper.";
                roundRes = 1;
                roundCounter++;
                playerScore++;
                playerScoreText.textContent = playerScore;
            }
            else{
                roundResult = console.log("It's a tie! Scissors ties with scissors.");
                resultText.textContent = "It's a tie! Scissors ties with scissors.";
                roundRes = 2;
                roundCounter++;
            }
                    
            break;

        default:
            roundResult = console.log("I did not understand the command, please enter a valid choice.");

    }

    return roundRes;

}

if(btnRock){
    btnRock.addEventListener("click", () => {
        playRound("Rock");
    })
}

if(btnPaper){
    btnPaper.addEventListener("click", () => {
        playRound("Paper");
    })
}

if(btnScissors){
    btnScissors.addEventListener("click", () => {
        playRound("Scissors");
    })
}


// function game(){
//     let playerCounter = 0;
//     let computerCounter = 0;

//     for(i = 0; i<5 ; i++){

//         playerPrompt = prompt("Round " + (i + 1) + "/5: " + "Choose rock, paper or scissors.");
//         playRound(playerPrompt);

//         if(playRound.roundRes == 1){
//             playerCounter++;
//         }
        
//         if(playRound.roundRes == 0){
//             computerCounter++;
//         }
//     }

//     if(playerCounter > computerCounter){
//         return console.log("Game over. You won!");
//     }
//     else if(playerCounter < computerCounter){
//         return console.log("Game over. You lost...");
//     }
//     else{
//         return console.log("Game over. It's a tie!");
//     }
// }