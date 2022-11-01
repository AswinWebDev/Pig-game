'use strict';
//x();
let activePlayer = 0;
let currentScore = 0;
let playing = true;
const score0El = document.querySelector(`#score--${activePlayer}`);
//const score1El = document.getElementById(`score--${activePlayer}`);
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById(`current--${activePlayer}`);
//const current1El = document.getElementById(`current--${activePlayer}`);
const diceEl = document.querySelector('.dice');
score0El.textContent = 0;
const score1El = document.getElementById('score--1');
score1El.textContent = 0;

const x = function () {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  activePlayer = 0; //activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  scores[1] = 0;
  scores[0] = 0;

  diceEl.classList.add('hidden');
  // document
  //   .querySelector(`player--${activePlayer}`)
  //   .classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};
diceEl.classList.add('hidden');

document.querySelector('.btn--new').addEventListener('click', x);
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    if (dice === 1) {
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});
//----------------------------------------------------//
const scores = [0, 0];
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(`score is ${scores[activePlayer]}`);
    document.querySelector(`#score--${activePlayer}`).textContent = Number(
      scores[activePlayer]
    );
    currentScore = 0;
    // player--0 player--active

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});
