window.onload = () => {
    document.getElementById("form").style.display = "none";
}

const updateProfile = (showForm) => {
    let form = document.getElementById("form");
    let updateButton = document.getElementById('updateButton');

    updateButton.style.display = showForm ? "none" : "block";
    form.style.display = showForm ? "block" : "none"
}

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