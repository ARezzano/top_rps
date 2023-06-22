const getComputerChoice = function(){
    let choice = ["Rock","Papers","Scissors"];

    return choice[Math.floor(Math.random()*choice.length)];
}