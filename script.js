let playerScore=0;
let computerScore=0;


function writeScore(score1, score2){
    let globalScore=document.querySelector("#score");
    globalScore.textContent=`${score1} - ${score2}`;
}

function getComputerChoice(){
    const choices=["Rock", "Paper", "Scissors"];
    let randomPick=Math.floor(Math.random()*3);
    return choices[randomPick];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()=="rock"){
        if (computerSelection.toLowerCase()=="paper"){
            computerScore++;
            //return "You lose! Paper beats rock.";
        }
        else if (computerSelection.toLowerCase()=="scissors"){
            playerScore++;
            //return "You win! Rock beats scissors.";
        }
        else{
            //return "It's even. Rock can't beat rock."
        }
    }
    else if (playerSelection.toLowerCase()=="paper"){
        if (computerSelection.toLowerCase()=="scissors"){
            computerScore++;
            //return "You lose! Scissors beat paper.";
        }
        else if (computerSelection.toLowerCase()=="rock"){
            playerScore++;
            //return "You win! Paper beats rock.";
        }
        else{
            //return "It's even. Paper can't beat paper.";
        }
    }
    else{
        if (computerSelection.toLowerCase()=="rock"){
            computerScore++;
            //return "You lose! Rock beats scissors.";
        }
        else if (computerSelection.toLowerCase()=="paper"){
            playerScore++;
            //return "You win! Scissors beat paper.";
        }
        else{
            //return "It's even. Scissors can't beat scissors.";
        }
    }
    writeScore(playerScore, computerScore);
}