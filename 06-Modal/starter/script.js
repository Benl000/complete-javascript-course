'use strict';

let openModalBtn = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.close-modal');

openModalBtn.forEach(button => button.addEventListener('click', openModal));
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function openModal() {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
}

function closeModal() {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}