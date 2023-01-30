'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

document.querySelector('.check').addEventListener('click', checkNum);

function checkNum() {

    let guess = Number(document.querySelector('.guess').value);

    if (score === 0) document.querySelector('.message').textContent = 'Reset game!';
    else if ((typeof guess !== 'number') || (guess === 0)) document.querySelector('.message').textContent = 'Enter a number!';
    else if (guess === secretNum) win();
    else if (guess !== secretNum) wromgNum(guess);

}

function win() {

    document.querySelector('.message').textContent = '🎊You won!🎊';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highestScore = (score > highestScore) ? score : highestScore;
    document.querySelector('.highscore').textContent = highestScore;
    document.querySelector('.number').textContent = secretNum;


}

function wromgNum(guess) {

    document.querySelector('.message').textContent = (guess > secretNum) ? 'Too high!📉' : 'Too low!📈';
    score--;
    document.querySelector('.score').textContent = score;

    if (score <= 0) {
        document.querySelector('.message').textContent = 'You lost!🤯';
        document.querySelector('body').style.backgroundColor = '#ff0000';
    }

}

document.querySelector('.reset').addEventListener('click', resetGame);

function resetGame() {

    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = null;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

}