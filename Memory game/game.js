
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();

}

function checkForMatch() {

  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();

  addCounter();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();

  matched();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

let moves = 0;
let counter = document.querySelector(".moves");
function addCounter() {
  moves++;
  counter.innerHTML = moves;

  if (moves == 1){
    second = 0;
    startTimer();
  }
}

let match = 0;
function matched() {
  match++;
  console.count();

  if (match == 8)
  {
    finnished();
  }
}

var second = 0;
var timer = document.querySelector(".timer")
var interval;
function  startTimer() {
  interval = setInterval(function(){
    timer.innerHTML = second;
    second++;
  },1000);
}

function finnished()
{
  clearInterval(interval);
  alert("Gonratz! you finished with" + " " + moves++ + " " + "moves and in only" + " " + second + " " + "seconds");
}


(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.ceil(Math.random() * 16);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
