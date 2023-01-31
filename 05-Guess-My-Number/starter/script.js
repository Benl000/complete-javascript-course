'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

document.querySelector('.check').addEventListener('click', checkNum);

function checkNum() {

    let guess = Number(document.querySelector('.guess').value);

    if (score === 0) displayMessage('Reset game!');
    else if ((typeof guess !== 'number') || (guess === 0)) displayMessage('Enter a number!');
    else if (guess === secretNum) win();
    else if (guess !== secretNum) wrongNum(guess);

}

function win() {

    displayMessage('🎊You won!🎊');
    document.querySelector('body').style.backgroundColor = '#60b347';
    highestScore = (score > highestScore) ? score : highestScore;
    document.querySelector('.highscore').textContent = highestScore;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

}

function wrongNum(guess) {

    if (score >= 1) {
        displayMessage((guess > secretNum) ? 'Too high!📉' : 'Too low!📈');
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (score <= 0) {
        displayMessage('You lost!🤯');
        document.querySelector('body').style.backgroundColor = '#ff0000';
    }

}

document.querySelector('.reset').addEventListener('click', resetGame);

function resetGame() {

    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = null;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}