document.addEventListener("DOMContentLoaded", () => {
    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }
    
    let btnRegistro = document.getElementById("regBtn");
    btnRegistro.addEventListener("click", () => {
        let nombre=document.getElementById("nombre").value;
        let apellido=document.getElementById("apellido").value;
        let email=document.getElementById("email").value;
        let pass1 = document.getElementById("password1").value;
        let pass2 = document.getElementById("password2").value;
        let btnTermino = document.getElementById("terminos").checked;
        
        if ((pass1.length >= 6) && pass1 === pass2 && btnTermino &&nombre!=""&&apellido!=""&&email!="") {
            showAlertSuccess();
        } else {
            showAlertError();
        }
    });
});