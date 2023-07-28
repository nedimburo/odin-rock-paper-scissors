let playerScore=0;
let computerScore=0;
let globalScore=document.querySelector("#score");
let choicesBox=document.querySelector("#choices");
let winner=document.querySelector("#game-winner");

function resetGame(){
    playerScore=0;
    computerScore=0;
    globalScore.innerHTML="";
    choicesBox.innerHTML="";
    winner.innerHTML="";
    let buttons=document.getElementById("button-container");
    buttons.style.display="flex";
}

function getComputerChoice(){
    const choices=["Rock", "Paper", "Scissors"];
    let randomPick=Math.floor(Math.random()*3);
    return choices[randomPick];
}

function checkScore(){
    if (playerScore==5 || computerScore==5){
        if (playerScore==5){
            winner.innerHTML=`<h2>GAME OVER</h2><br>Player is the winner of the game.`;
        }
        else{
            winner.innerHTML=`<h2>GAME OVER</h2><br>Computer is the winner of the game.`;
        }
        let buttons=document.getElementById("button-container");
        buttons.style.display="none";
    }
}

function playRound(playerSelection, computerSelection) {
    let message="";
    if (playerSelection.toLowerCase()=="rock"){
        if (computerSelection.toLowerCase()=="paper"){
            computerScore++;
            message="You lose! Paper beats rock.";
        }
        else if (computerSelection.toLowerCase()=="scissors"){
            playerScore++;
            message="You win! Rock beats scissors.";
        }
        else{
            message="It's even. Rock can't beat rock."
        }
    }
    else if (playerSelection.toLowerCase()=="paper"){
        if (computerSelection.toLowerCase()=="scissors"){
            computerScore++;
            message="You lose! Scissors beat paper.";
        }
        else if (computerSelection.toLowerCase()=="rock"){
            playerScore++;
            message="You win! Paper beats rock.";
        }
        else{
            message="It's even. Paper can't beat paper.";
        }
    }
    else{
        if (computerSelection.toLowerCase()=="rock"){
            computerScore++;
            message="You lose! Rock beats scissors.";
        }
        else if (computerSelection.toLowerCase()=="paper"){
            playerScore++;
            message="You win! Scissors beat paper.";
        }
        else{
            message="It's even. Scissors can't beat scissors.";
        }
    }
    choicesBox.innerHTML=`Player has chosen: ${playerSelection}<br>Computer has chosen: ${computerSelection}<br>${message}`;
    globalScore.textContent=`Player: ${playerScore} - Computer: ${computerScore}`;
    checkScore();
}