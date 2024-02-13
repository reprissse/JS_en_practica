// Variables vinculadas a los botones
let btnSumar = document.getElementById('btn-sumar');
let btnRestar = document.getElementById('btn-restar');

// Variables vinculadas a los inputs
let valor1 = document.getElementById('valor1');
let valor2 = document.getElementById('valor2');

// Variable vinculada al resultado
let resultado = document.querySelector('.resultado');



// SUMA: Función de suma, declara variables y la operación suma entre ellas
let suma = (valor1, valor2) => valor1 + valor2;


// RESTA: Función de resta, declara variables y la operación resta o '0'
let resta = (valor1, valor2) => {
    //si valor 1 es menor a valor 2 
    if (valor1 >= valor2) {
        return valor1 - valor2;
        //el resultado es 0 por defecto ya que será n° negativo
    } else {
        return 0;
    }
};


// Evento de clic para el botón de suma
btnSumar.addEventListener('click', function() {
    resultado.innerHTML = `El resultado es ${suma(Number(valor1.value), Number(valor2.value))}`;
});

// Evento de clic para el botón de resta
btnRestar.addEventListener('click', function() {
    resultado.innerHTML = `El resultado es ${resta(Number(valor1.value), Number(valor2.value))}`;
});