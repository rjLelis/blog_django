import { addClass, removeClass, createEmailHint } from './functions.js'

const form = document.getElementById('form');
const updateButton = document.getElementById('update-button');
const cancelButton = document.getElementById('cancel-button');

createEmailHint();

cancelButton.addEventListener('click', () => {
    addClass(form, 'hide');
    addClass(cancelButton, 'hide');
    removeClass(updateButton, 'hide');
});

updateButton.addEventListener('click', () => {
    removeClass(form, 'hide');
    removeClass(cancelButton, 'hide');
    addClass(updateButton, 'hide');
});
