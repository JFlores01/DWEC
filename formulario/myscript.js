function validacion() {

    var form = document.form;
    var dniR = /^(\d{8})([A-Z])$/; //FOrmato DNI
    var emailR = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/; //Formato email
    var tlfR = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/; //Formato telefono

    //Validación nombre
    if (form.nombre.value == 0) {
        alert("Rellena el nombre.");
        form.nombre.value = "";
        form.nombre.focus();
        return false;
    } else {
        console.log("Nombre correcto");
    }
    //Validación apellidos
    if (form.apellido.value == 0) {
        alert("Rellena los apellidos.")
    } else {
        console.log("Apellidos correctos.")
    }
    //Validacion DNI
    if (form.dni.value.match(dniR)) {
        console.log("DNI correcto.")
    } else {
        alert("DNI Incorrecto");
    }
    //Validacion email
    if (form.email.value.match(emailR)) {
        console.log("Email correcto.")
    } else {
        alert("Email incorrecto.")
    }
    //Validacion telefono
    if (form.tlf.value.match(tlfR)) {
        console.log("Teléfono correcto.")
    } else {
        console.log("Teléfono incorrecto.")
    }
    //Validacion usuario
    if (form.usuario.value == 0) {
        alert("Rellena el usuario.");
        form.nombre.value = "";
        form.nombre.focus();
        return false;

    }else{
        console.lod("Nombre de usuario correcto.");
    }

    if(form.fecha.value == 0){
        console.log("Fecha incorrecta.");
    }else{
        console.log("Fecha correcta.");
    }






}