function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', ()=>{
    var boton = document.getElementById('regBtn');
    boton.addEventListener('click', ()=> {

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password1').value;
    var contraseña2 = document.getElementById('password2').value;
    var terminos = document.getElementById('terminos').checked;
    

    if (nombre && apellido && email && contraseña && contraseña2 && terminos && contraseña===contraseña2){
        showAlertSuccess();
    } else {
        showAlertError();
    }
})   
})