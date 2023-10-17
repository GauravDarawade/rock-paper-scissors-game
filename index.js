let your = 0;
let computer = 0;
const userScore = document.getElementById("your");
const computerScore = document.getElementById("computer");
const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");
const finala = document.querySelector("#final");
const rulebtn = document.querySelector(".rule-btn");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  your++;
  userScore.innerHTML = your;
  computerScore.innerHTML = computer;
  finala.innerText = "YOU WON";
}

function lose() {
  computer++;
  userScore.innerHTML = your;
  computerScore.innerHTML = computer;
  finala.innerText = "YOU LOSE";
}

function draw() {
  userScore.innerHTML = your;
  computerScore.innerHTML = computer;
  finala.innerText = "DRAW";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });

  paper.addEventListener("click", function () {
    game("p");
  });

  scissors.addEventListener("click", function () {
    game("s");
  });
}
main();

//Rules
rulebtn.addEventListener("click", function () {
  let ruleImgContainer = document.getElementById("ruleImgContainer");
  ruleImgContainer.classList.toggle("hidden");
});

function reDirect() {
  window.location.href = "index.html";
}
function nextFun() {
  window.location.href = "winner.html";
}
