// Generate Random computer Choice
const computerChoice = () => {
  let items = ["✊", "🖐️", "✌️"];
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

// Logic Check function

const checkLogic = (userChoice, computerChoice) => {
  // returns 0 if draw
  // returns -1 if user won
  // returns 1 if computer won
  if (userChoice === computerChoice) {
    return 0;
  } else if (userChoice === "✊" && computerChoice === "🖐️") {
    return 1;
  } else if (userChoice === "✊" && computerChoice === "✌️") {
    return -1;
  } else if (userChoice === "🖐️" && computerChoice === "✊") {
    return -1;
  } else if (userChoice === "🖐️" && computerChoice === "✌️") {
    return 1;
  } else if (userChoice === "✌️" && computerChoice === "🖐️") {
    return -1;
  } else if (userChoice === "✌️" && computerChoice === "✊") {
    return 1;
  }
};

// Show Message Fucntion

const showMessage = (result) => {
  result == 0
    ? (MessageElement.innerHTML = "DRAW !!")
    : result == -1
    ? (MessageElement.innerHTML = "YOU WON !!!")
    : (MessageElement.innerHTML = "COMPUTER WON !!!");
};

// Update Score fucntion

const UpdateScore = (result) => {
  // result 1 then update computerscore
  // result -1 then update userScore
  if (result == -1) {
    userScoreElement.innerHTML =
      Number.parseInt(userScoreElement.innerHTML) + 1;
  } else if (result == 1) {
    computerScoreElement.innerHTML =
      Number.parseInt(computerScoreElement.innerHTML) + 1;
  }
};

// Side - tab buttons
const rockElement = document.querySelector("#rock");
const paperElement = document.querySelector("#paper");
const scissorsElement = document.querySelector("#scissors");

// Main box
const MessageElement = document.querySelector("#message-box");
const computerTextElement = document.querySelector("#computerText");
const userTextElement = document.querySelector("#userText");

// Score Sheet
const computerScoreElement = document.querySelector("#computerScore");
const userScoreElement = document.querySelector("#userScore");
const resetBtnElement = document.querySelector("#js-reset-btn");

// Event Listeners

// rock event
rockElement.addEventListener("click", () => {
  userTextElement.innerHTML = "✊";
  computerTextElement.innerHTML = computerChoice();

  let result = checkLogic(
    userTextElement.innerHTML,
    computerTextElement.innerHTML
  );
  showMessage(result);
  UpdateScore(result);
});

// paper event
paperElement.addEventListener("click", () => {
  userTextElement.innerHTML = "🖐️";
  computerTextElement.innerHTML = computerChoice();

  let result = checkLogic(
    userTextElement.innerHTML,
    computerTextElement.innerHTML
  );
  showMessage(result);
  UpdateScore(result);
});

// Scissor event
scissorsElement.addEventListener("click", () => {
  userTextElement.innerHTML = "✌️";
  computerTextElement.innerHTML = computerChoice();

  let result = checkLogic(
    userTextElement.innerHTML,
    computerTextElement.innerHTML
  );
  showMessage(result);
  UpdateScore(result);
});

// reset button

resetBtnElement.addEventListener("click", () => {
  computerScoreElement.innerHTML = "0";
  userScoreElement.innerHTML = "0";
  MessageElement.innerHTML = "START GAME";
});
