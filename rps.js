const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resultDiv = document.querySelector(".rpsResults");
let resultText = document.querySelector("#resultText");

const getComputerChoice = function(){
    let choice = ["rock","paper","scissors"];

    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerInput, computerInput){
    computerInput = getComputerChoice();
    let playerInputLowerCase = playerInput.toLowerCase();
    let roundResult = 0;
    let roundRes = 0; //0 lose, 1 win, 2 tie

    switch (playerInputLowerCase){
        case 'rock':
        case 'rocks':
            if(computerInput == "rock"){
                roundResult = console.log("It's a tie! Rock ties with rock.");
                resultText.textContent = "It's a tie! Rock ties with rock.";
                roundRes = 2;
            }
            else if(computerInput == "paper"){
                roundResult = console.log("You lose! Paper beats rock.");
                resultText.textContent = "You lose! Paper beats rock.";
                roundRes = 0;
            }
            else{
                roundResult = console.log("You win! Rock beats scissors.");
                resultText.textContent = "You win! Rock beats scissors.";
                roundRes = 1;
            }
            
            break;

        case 'paper':
        case 'papers':
            if(computerInput == "rock"){
                roundResult = console.log("You win! Paper beats rock.");
                resultText.textContent = "You win! Paper beats rock.";
                roundRes = 1;
            }
            else if(computerInput == "paper"){
                roundResult = console.log("It's a tie! Paper ties with paper.");
                resultText.textContent = "It's a tie! Paper ties with paper.";
                roundRes = 2;
            }
            else{
                roundResult = console.log("You lose! Scissors beats paper.");
                resultText.textContent = "You lose! Scissors beats paper.";
                roundRes = 0;
            }
            
            break;

        case 'scissors':
        case 'scissor':
            if(computerInput == "rock"){
                roundResult = console.log("You lose! Rock beats scissors.");
                resultText.textContent = "You lose! Rock beats scissors.";
                roundRes = 0;
            }
            else if(computerInput == "paper"){
                roundResult = console.log("You win! Scissors beats paper.");
                resultText.textContent = "You win! Scissors beats paper.";
                roundRes = 1;
            }
            else{
                roundResult = console.log("It's a tie! Scissors ties with scissors.");
                resultText.textContent = "It's a tie! Scissors ties with scissors.";
                roundRes = 2;
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