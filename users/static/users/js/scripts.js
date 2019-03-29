window.onload = function(){
    document.getElementById("form").style.display = "none";
}

let updateProfile = (showForm) => {
    let form = document.getElementById("form");
    let updateButton = document.getElementById('updateButton');

    updateButton.style.display = showForm ? "none" : "block";
    form.style.display = showForm ? "block" : "none"
}