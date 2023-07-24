function getComputerChoice(){
    const choices=["Rock", "Paper", "Scissors"];
    let randomPick=Math.floor(Math.random()*3);
    return choices[randomPick];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()=="rock"){
        if (computerSelection.toLowerCase()=="paper"){
            return "You lose! Paper beats rock.";
        }
        else if (computerSelection.toLowerCase()=="scissors"){
            return "You win! Rock beats scissors.";
        }
        else{
            return "It's even. Rock can't beat rock."
        }
    }
    else if (playerSelection.toLowerCase()=="paper"){
        if (computerSelection.toLowerCase()=="scissors"){
            return "You lose! Scissors beat paper.";
        }
        else if (computerSelection.toLowerCase()=="rock"){
            return "You win! Paper beats rock.";
        }
        else{
            return "It's even. Paper can't beat paper.";
        }
    }
    else{
        if (computerSelection.toLowerCase()=="rock"){
            return "You lose! Rock beats scissors.";
        }
        else if (computerSelection.toLowerCase()=="paper"){
            return "You win! Scissors beat paper.";
        }
        else{
            return "It's even. Scissors can't beat scissors.";
        }
    }
}

function game(){
    for (let i=0; i<5; i++){
        let playerSelection=prompt("Choose between Rock, Paper and Scissors:");
        const computerSelection = getComputerChoice();
        console.log("Computers choice: "+computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();