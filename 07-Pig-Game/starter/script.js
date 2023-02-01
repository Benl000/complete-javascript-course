'use strict';

//selectinf elements
const scorePlayer0El = document.querySelector('#score--0');
const scorePlayer1El = document.querySelector('#score--1');
const currentPlayer0El = document.querySelector('#current--0');
const currentPlayer1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions

let currGame;

initGame();

// game play buttons

btnRoll.addEventListener('click', () => {

    if (currGame.isGameOn) {

        let diceRollNumber = diceRoll();
        diceEl.classList.remove('hidden');
        diceEl.setAttribute('src', `dice-${diceRollNumber}.png`);

        (diceRollNumber !== 1) ? handleRoll(diceRollNumber) : handle1();
    }

});

btnHold.addEventListener('click', () => {

    if (currGame.isGameOn) {

        currGame.players[currGame.activePlayer].score += currGame.players[currGame.activePlayer].currScore;
        currGame.players[currGame.activePlayer].currScore = 0;
        displayTotalScore();
        displayCurrentScore();
        (currGame.players[currGame.activePlayer].score >= currGame.gameGoal) ? win() : switchplayer();
    }

});

btnNew.addEventListener('click', () => { initGame(); });

//game play

function diceRoll() {
    return Math.trunc(Math.random() * 6) + 1;
}

function handleRoll(diceRollNumber) {
    currGame.players[currGame.activePlayer].currScore += diceRollNumber;
    displayCurrentScore();
}

function handle1() {
    currGame.players[currGame.activePlayer].currScore = 0;
    displayCurrentScore();
    switchplayer();
}

function switchplayer() {
    document.querySelector(`.player--${currGame.activePlayer}`).classList.remove('player--active');
    currGame.activePlayer = (currGame.activePlayer === 0) ? 1 : 0;
    document.querySelector(`.player--${currGame.activePlayer}`).classList.add('player--active');
}

function displayCurrentScore() {
    document.querySelector(`#current--${currGame.activePlayer}`).textContent = currGame.players[currGame.activePlayer].currScore;
}

function displayTotalScore() {
    document.querySelector(`#score--${currGame.activePlayer}`).textContent = currGame.players[currGame.activePlayer].score;
}

function win() {
    document.querySelector(`.player--${currGame.activePlayer}`).classList.add('player--winner');
    currGame.isGameOn = false;
    diceEl.classList.add('hidden');
}

function initGame() {

    currGame = {
        players: [
            { currScore: 0, score: 0 },
            { currScore: 0, score: 0 }
        ],
        activePlayer: 0,
        isGameOn: true,
        gameGoal: 100
    };

    scorePlayer0El.textContent = currGame.players[0].score;
    currentPlayer0El.textContent = currGame.players[0].score;
    scorePlayer1El.textContent = currGame.players[1].currScore;
    currentPlayer1El.textContent = currGame.players[1].currScore;
    diceEl.classList.add('hidden');
    document.querySelectorAll(`.player`).forEach(player => player.classList.remove('player--winner'));
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');

}