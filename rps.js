const getComputerChoice = function(){
    let choice = ["rock","paper","scissors"];

    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerInput, computerInput){
    computerInput = getComputerChoice();
    let playerInputLowerCase = playerInput.toLowerCase();
    let roundResult = 0;

    switch (playerInputLowerCase){
        case 'rock':
        case 'rocks':
            if(computerInput == "rock"){
                roundResult = console.log("It's a tie! Rock ties with rock.");
            }
            else if(computerInput == "paper"){
                roundResult = console.log("You lose! Paper beats rock.");
            }
            else{
                roundResult = console.log("You win! Rock beats scissors.");
            }
            
            break;

        case 'paper':
        case 'papers':
            if(computerInput == "rock"){
                roundResult = console.log("You win! Paper beats rock.");
            }
            else if(computerInput == "paper"){
                roundResult = console.log("It's a tie! Paper ties with paper.");
            }
            else{
                roundResult = console.log("You lose! Scissors beats paper.");
            }
            
            break;

        case 'scissors':
        case 'scissor':
            if(computerInput == "rock"){
                roundResult = console.log("You lose! Rock beats scissors.");
            }
            else if(computerInput == "paper"){
                roundResult = console.log("You win! Scissors beats paper.");
            }
            else{
                roundResult = console.log("It's a tie! Scissors ties with scissors.");
            }
                    
            break;

        default:
            roundResult = console.log("I did not understand the command, please enter a valid choice.");

    }

    return roundResult;
    
}