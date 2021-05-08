function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    let rockPaperScissor = "";
    switch(randomNumber){
        case 1:
            rockPaperScissor = "rock";
            break;
        case 2:
            rockPaperScissor = "paper";
            break;
        case 3:
            rockPaperScissor = "scissor";
            break;
        default:
            rockPaperScissor = "Null";
            break;
    }
    return(rockPaperScissor);
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == "paper" && computerChoice == "rock"){
        return("Paper beats rock! You win!");
    }
    else if(playerChoice == "rock" && computerChoice == "scissor"){
        return("Rock beats Scissors! You win!");
    }
    else if(playerChoice == "scissor" && computerChoice == "paper"){
        return("Scisors beats paper! You win!");
    }
    else if(playerChoice == "paper" && computerChoice == "scissor"){
        return("Scissors beats paper! You lose! Better luck next time!");
    }
    else if(playerChoice == "scissor" && computerChoice == "rock"){
        return("Rock beats scissors! You lose! Better luck next time!");
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        return("Paper beats rock! You lose! Better luck next time!");
    }
    else if(playerChoice == computerChoice){
        return("A tie! Does that mean you both win? Or lose? Either way, I'm not counting this...");
    }
    else{
        return("Something went wrong!");
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerChoice = window.prompt("Choose your fighting stance! (rock, paper, or scissor) : ").toLowerCase().trim();
        let computerChoice = computerPlay();
        alert(playRound(playerChoice, computerChoice));
    }
}

game();
