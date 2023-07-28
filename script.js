let playerScore=0;
let computerScore=0;
let globalScore=document.querySelector("#score");
let choicesBox=document.querySelector("#choices");

function getComputerChoice(){
    const choices=["Rock", "Paper", "Scissors"];
    let randomPick=Math.floor(Math.random()*3);
    return choices[randomPick];
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
    globalScore.textContent=`${playerScore} - ${computerScore}`;
}