'use strict';
let dice = document.querySelector('.dice');
const newgame = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
let scores = [0, 0];
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
let currentScore = 0;
let currentScoreel = document.querySelector('#current--0');
dice.style.display = 'none';
player1Score.textContent = 0;
player2Score.textContent = 0;
let activePlayer = 0;
let state = true;

function switchPlayer() {
  currentScore = 0;
  currentScoreel.textContent = currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScoreel = document.querySelector(`#current--${activePlayer}`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}

roll.addEventListener('click', function () {
  if (state) {
    const rolledNumber = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${rolledNumber}.png`;
    dice.style.display = 'flex';
    if (rolledNumber !== 1) {
      currentScore += rolledNumber;
      currentScoreel.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (state) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      state = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.replace('player--active', 'player--winner');
      dice.style.display = 'none';
    } else {
      switchPlayer();
    }
  }
});

newgame.addEventListener('click', function () {
  state = true;
  scores = [0, 0];
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  activePlayer = 0;
  dice.style.display = 'none';
  currentScore = 0;
  currentScoreel.textContent = currentScore;
});
