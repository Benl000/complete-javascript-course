'use strict';

let openModalBtn = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.close-modal');

//open modal
openModalBtn.forEach(button => button.addEventListener('click', openModal));

//close modal
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (ev) => {
    if ((ev.key === 'Escape') && (!document.querySelector('.modal').classList.contains('hidden'))) closeModal();
});

function openModal() {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
}

function closeModal() {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}