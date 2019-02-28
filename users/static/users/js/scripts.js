window.onload = function(){
    document.getElementById("form").style.display = "none";
}

let updateProfile = (showForm) => {
    if(showForm){
        document.getElementById("updateButton").style.display = "none";
        document.getElementById("form").style.display = "block";
    } else {
        document.getElementById("updateButton").style.display = "block";
        document.getElementById("form").style.display = "none";
    }    
}