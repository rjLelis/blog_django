window.onload = function(){
    document.getElementById("form").style.display = "none";
}

let updateProfile = (showForm) => {
    let form = document.getElementById("form");
    let updateButton = document.getElementById('updateButton');

    updateButton.style.display = showForm ? "none" : "block";
    form.style.display = showForm ? "block" : "none"
}

let formValidate = () => {
    let username = document.getElementById('id_username').value;
    if (username === '') {
        document.getElementById('hint_id_username').innerHTML = 'Este campo é obrigatório'
        return false
    }
    return true;
}