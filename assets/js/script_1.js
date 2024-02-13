// variable vinculada al boton //
let miBtn = document.getElementById('boton');

//variable vinculada a los input//
let textoNombre = document.getElementById('nombre');
let textoAsunto = document.getElementById('asunto');
let textoMensaje = document.getElementById('mensaje');

//variable vinculada al resultado correcto//
let resultado = document.querySelector('.resultado');

//variable vinculada al error en el envío//
let errorNombre = document.querySelector('.errorNombre');


//variable vinculada a la estructura de formulario
let form = document.getElementById("formulario");


//función y evento del formulario vinculado a la información ingresada es valida//
form.addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();
    let textoNombre = document.querySelector("#nombre").value;
    let textoAsunto = document.querySelector("#asunto").value;
    let textoMensaje = document.querySelector("#mensaje").value;
    let resultado = validar(textoNombre, textoAsunto, textoMensaje);
    if(resultado == true) {
        exito();
    }
});


//funcion si la información ingresada es erronea//
function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}


//función del resultado; visualizar el texto verde si la información es valida//
function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
}


//función validar input del formulario//
function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    
    //NOMBRE: aviso de error por espacio en blanco//
    let validacionNombre = /[a-zA-Z]/gim;
    if (nombre == ""){
        document.querySelector(".errorNombre").innerHTML = "El campo de nombre no puede estar vacío";
        pasamosLaValidacion = false;
        //NOMBRE: aviso de error si el formato no es valido//
    } else if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido.";
        pasamosLaValidacion = false;
    }

    //ASUNTO: aviso de error por espacio en blanco//
    let validacionAsunto = /[a-zA-Z]/gim;
    if (asunto == ""){
        document.querySelector(".errorAsunto").innerHTML = "El campo de asunto no puede estar vacío";
        pasamosLaValidacion = false;
        //ASUNTO: aviso de error si el formato no es valido//
    } else if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido";
        pasamosLaValidacion = false;
    }


    //MENSAJE: aviso de error por espacio en blanco//
    let validacionMensaje = /[a-zA-Z]/gim;
    if (mensaje == ""){
        document.querySelector(".errorMensaje").innerHTML = "El campo de mensaje no puede estar vacío";
        pasamosLaValidacion = false;
        //MENSAJE:aviso de error si el formato no es valido//
    } else if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido.";
        pasamosLaValidacion = false;
    }
    return pasamosLaValidacion;
}