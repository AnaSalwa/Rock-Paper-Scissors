

let playerScore = 0;
let computerScore = 0;
let computerPlay = "play" ;
let playerPlay="play";

function rock(){
    document.getElementById("player-round").textContent="Player: Rock";
    playerPlay= "rock";   
    computerPlay=computerPlays();
    console.log(computerPlay);
    decision(computerPlay,playerPlay);
    document.getElementById("player-score").textContent = `Player Score : ${playerScore}`;
    document.getElementById("computer-score").textContent = `Computer Score : ${computerScore}`;
}

function computerPlays(){
    let random =Math.floor(Math.random()*3)+1;
    switch  (random){
        case 1:
            console.log("Computer chose rock");
            document.getElementById("computer-round").textContent="Computer: Rock";
            computerPlay="rock";
            break;
         case 2:
            console.log("Computer chose paper");
            document.getElementById("computer-round").textContent="Computer: Paper";
            computerPlay="paper";
            break;
        case 3:
            console.log("Computer chose scissors");
            document.getElementById("computer-round").textContent="Computer: Scissors";   
            computerPlay="scissors";
            break;
        
    }
    return computerPlay;
}


function decision(computerPlay, playerPlay) {
    if (computerPlay === playerPlay) {
        document.getElementById("result").textContent = "It's a tie";
    } else if (computerPlay === "rock" && playerPlay === "scissors") {
        document.getElementById("result").textContent = "Computer wins";
        computerScore++;
    } else if (computerPlay === "rock" && playerPlay === "paper") {
        document.getElementById("result").textContent = "You win";
        playerScore++;
    } else if (computerPlay === "paper" && playerPlay === "rock") {
        document.getElementById("result").textContent = "Computer wins";
        computerScore++;
    } else if (computerPlay === "paper" && playerPlay === "scissors") {
        document.getElementById("result").textContent = "You win";
        playerScore++;
    } else if (computerPlay === "scissors" && playerPlay === "rock") {
        document.getElementById("result").textContent = "You win";
        playerScore++;
    } else if (computerPlay === "scissors" && playerPlay === "paper") {
        document.getElementById("result").textContent = "Computer wins";
        computerScore++;
    }
}



console.log(playerScore);

function paper(){
    document.getElementById("player-round").textContent="Player: Paper";
    playerPlay= "paper";   
    computerPlay=computerPlays();
    console.log(computerPlay);
    decision(computerPlay,playerPlay);
    document.getElementById("player-score").textContent = `Player Score : ${playerScore}`;
    document.getElementById("computer-score").textContent = `Computer Score : ${computerScore}`;
}


function scissors(){
    document.getElementById("player-round").textContent="Player: Scissors";
    playerPlay= "scissors";   
    computerPlay=computerPlays();
    console.log(computerPlay);
    decision(computerPlay,playerPlay);
    document.getElementById("player-score").textContent = `Player Score : ${playerScore}`;
    document.getElementById("computer-score").textContent = `Computer Score : ${computerScore}`;
}