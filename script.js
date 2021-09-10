function validaEmail() {
    var email = document.querySelector("#email")
    var error = document.querySelector("#alerta")
    var erroimg = document.querySelector("#erroImg")

    if(!email.checkValidity()) {
        error.innerHTML = "Please provide a valid email";
        erroimg.innerHTML = "<img src='images/icon-error.svg'>"
    }
}


function redefinirMsg() {
    var error = document.querySelector("#alerta")

    if(error.innerHTML == "Please provide a valid email") {
        error.innerHTML = "";
        erroImg.innerHTML = "";
    }
}