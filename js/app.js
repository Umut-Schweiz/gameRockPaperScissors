Swal.fire({
  icon: 'info',
  title: "Rules of the game",
  text: 'This is the classic rock-paper-scissors game everyone knows...At the end of 5 rounds, the winner with the most getting the round wins the game.',
  confirmButtonText: 'Good Luck and Start'
})

const handOptions = {
  "rock": "/assets/Rock.png",
  "paper": "/assets/Paper.png",
  "scissors": "/assets/Scissors.png"
}

let userScore = 0;
let computerScore = 0;
let timesGame = 5;


const pickUserHand = (hand) => {
  let gameArea = document.querySelector(".game-area");
  gameArea.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand)

};


//reduce number of game right
const reduceTimeGamesRight = () => {
  timesGame -= 1;
  document.querySelector("#numberOfGame").innerText = `${timesGame} games left`;
  if (timesGame == 0) {
    document.querySelector(".newGame").innerText = "Show Result";
  }
}


const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  // set computer image 
  document.querySelector("#computerPickImage").src = handOptions[cpHand]

  referee(hand, cpHand);
};


const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setRoundDecision("YOU LOSE!");
    setComputerScore(computerScore + 1)
    reduceTimeGamesRight()
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setRoundDecision("YOU LOSE!");
    setComputerScore(computerScore + 1)
    reduceTimeGamesRight()
  }
  if (userHand == "rock" && cpHand == "paper") {
    setRoundDecision("YOU LOSE!");
    setComputerScore(computerScore + 1)
    reduceTimeGamesRight()
  }

  if (userHand == "paper" && cpHand == "rock") {
    setRoundDecision("YOU WIN!");
    setUserScore(userScore + 1)
    reduceTimeGamesRight()
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setRoundDecision("YOU WIN!");
    setUserScore(userScore + 1)
    reduceTimeGamesRight()
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setRoundDecision("YOU WIN!");
    setUserScore(userScore + 1)
    reduceTimeGamesRight()
  }

  if (userHand == cpHand ) {
    setRoundDecision("It's a tie!");
  }
  
};

const nextRound = () => {

  if(timesGame != 0){
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".game-area");
  hands.style.display = "flex";
  }else {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
    
    let gameArea = document.querySelector(".game-area");
    gameArea.style.display = "flex";

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let finishedGame = document.querySelector(".finishedGame");
    finishedGame.style.display = "inline"

    let refreshGame = document.querySelector(".refreshGame");
    refreshGame.style.display = "inline"

    if(userScore > computerScore){
      let resultWon = document.querySelector(".result-won");
      resultWon.style.display = "inline"
    }else{
      let resultLost = document.querySelector(".result-lost");
      resultLost.style.display = "inline"
    }
  }
  
}

const setRoundDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setUserScore = (newScore) => {
  userScore = newScore;
  document.querySelector("#userScore").innerText = newScore;
}

const setComputerScore = (newScore) => {
  computerScore = newScore;
  document.querySelector("#computerScore").innerText = newScore;
}

const restartGame = () => {
  location.reload();
}

