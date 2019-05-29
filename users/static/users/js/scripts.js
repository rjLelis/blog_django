const form = document.getElementById('form');
const updateButton = document.getElementById('update-button');
const cancelButton = document.getElementById('cancel-button');

cancelButton.onclick = () => {
    addClass(form, 'hide');
    addClass(cancelButton, 'hide');
    removeClass(updateButton, 'hide');
}

updateButton.onclick = () => {
    removeClass(form, 'hide');
    removeClass(cancelButton, 'hide');
    addClass(updateButton, 'hide');
}

const removeClass = (element, className) => element.classList.remove(className);

const addClass = (element, className) => element.classList.add(className);

const formValidate = () => {
    let isFormValid = true;
    const username = document.getElementById('id_username');
    if (username.value.trim() === '') {
        username.placeholder = 'Este campo é obrigatório!';
        isFormValid = false;
    }
    const email = document.getElementById('id_email');
    if (email.value.trim() === '') {
        email.placeholder = 'Este campo é obrigatório!';
        isFormValid = false;
    }
    return isFormValid;
}