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
//let p_score = 0, c_score = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        let playerSelection = button.className;
        playRound(playerSelection, computerSelection);
        
        if(PlayerWon == true){
            PlayerScore++;
        }
        else if (PlayerLost == true){
            ComputerScore++;
        } 
        p_score =  document.querySelector('.player-score');
        c_score =  document.querySelector('.computer-score');

        p_score.textContent = PlayerScore;
        c_score.textContent = ComputerScore;

        PlayerWon = false
        PlayerLost = false
        PlayerDraw = false

        if (PlayerScore == 5 || ComputerScore == 5) {
            gameover(PlayerScore, ComputerScore);
        }
    });
});

function gameover(PlayerScore, ComputerScore){
    const msg = document.createElement('div');
    msg.classList.add("msg");
    if (PlayerScore > ComputerScore){
        msg.textContent = "Congratulations, you won!"

    }else msg.textContent = "You lost..."
    document.body.appendChild(msg);
};

