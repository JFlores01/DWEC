


function validacion() {

    var form = document.form;
    var dniR = /^(\d{8})([A-Z])$/; //FOrmato DNI
    var emailR = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/; //Formato email
    var tlfR = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/; //Formato telefono
    var ibn = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/g //Formato IBAN
    var swt = /[^A-Za-z0-9]{8,11}/g //Formato SWIFT

    const listaJuegos = document.querySelector("ul");
    const juegos = ["Fortnite", "Borderlands2", "Dead By Day light", "Rocket League"];

 

    

    juegos.forEach(item => {

        const li = document.createElement('li');
        li.textContent = item;
        listaJuegos.appendChild(li);

    });
    

    
    

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
    //Validacion IBAN
    if(form.IBAN.value.match(ibn)){
        console.log("IBAN correcto")
    }else{
        console,log("IBAN incorrecto")
    }
    //Validación del swift
    if (form.swift.value.match(swt)) {
        console.log("Swift correcto.")
    } else {
        alert("Swift incorrecto.")
        
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

