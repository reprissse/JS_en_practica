// variable de caja que cambia de color
let caja = document.getElementById('caja');


// Función que cambia el color de la caja
function cambiarColor(color) {
    caja.style.backgroundColor = color;
}


// se unifican los botones en una variable
let botones = document.getElementsByTagName('button');


// Añadimos un evento a cada botón
//se crea un bucle para los botones
for (let i = 0; i < botones.length; i++) {
    //se añade un evento clik a cada boton//
    botones[i].addEventListener('click', function() {

        // Obtenemos el color de fondo del botón
        let color = this.style.backgroundColor;
        
        // Cambiamos el color de la caja
        cambiarColor(color);
    });
}

