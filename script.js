function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "rock"){
        PlayerDraw = true
        alert("draw")
    }

    else if(playerSelection == "rock" && computerSelection == "paper"){
        PlayerLost = true
        alert("you lose, paper beats rock")
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        PlayerWon = true
        alert("you win, rock beats scissors")
    }

    if(playerSelection == "paper" && computerSelection == "paper"){
        PlayerDraw = true
        alert("draw")
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        PlayerWon = true
        alert("you win, paper beats rock")
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        PlayerLost = true
        alert("you lose, scissors beats paper")
    }
    
    if(playerSelection == "scissors" && computerSelection == "scissors"){
        PlayerDraw = true
        alert("draw")
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        PlayerWon = true
        alert("you win, scissors beats paper")
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        PlayerLost = true
        alert("you lose, rock beats scissors")
    }
  }
function computerPlay() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if(choice == 1)
        return "paper"
    else if (choice == 2)
        return "rock"
    else return "scissors"
  }
  
let PlayerScore = 0
let ComputerScore = 0
let PlayerWon = false
let PlayerLost = false
let PlayerDraw = false
for (let i = 0; i < 5; i++) {
    
    const playerSelection = prompt("Type rock paper or scissors");
    const computerSelection = computerPlay();
    console.log(PlayerScore, ComputerScore);
    playRound(playerSelection, computerSelection);
    if(PlayerWon == true){
        PlayerScore++;
    }
    else if (PlayerLost == true){
        ComputerScore++;
    } 
    PlayerWon = false
    PlayerLost = false
    PlayerDraw = false
}
if (PlayerScore > ComputerScore){
    console.log("congrats u win")
}else if(PlayerScore < ComputerScore)
    console.log("loser")
else console.log("draw... ")