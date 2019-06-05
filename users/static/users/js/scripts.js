const form = document.getElementById('form');
const updateButton = document.getElementById('update-button');
const cancelButton = document.getElementById('cancel-button');

cancelButton.addEventListener('click', () => {
    addClass(form, 'hide');
    addClass(cancelButton, 'hide');
    removeClass(updateButton, 'hide');
})

updateButton.addEventListener('click', () => {
    removeClass(form, 'hide');
    removeClass(cancelButton, 'hide');
    addClass(updateButton, 'hide');
})

function removeClass(element, className) {
    element.classList.remove(className);
}

function addClass(element, className) {
    element.classList.add(className);
}

function formValidate() {
    let isFormValid = true;
    let username = document.getElementById('id_username');
    if (username.value.trim() === '') {
        username.placeholder = 'Este campo é obrigatório!';
        isFormValid = false;
    }
    let email = document.getElementById('id_email');
    if (email.value.trim() === '') {
        email.placeholder = 'Este campo é obrigatório!';
        isFormValid = false;
    }
    return isFormValid;
}
