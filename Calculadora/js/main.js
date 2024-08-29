//! Falta que no agrege mas puntos despues del primero.
//! La fundion de %
//! Que se pueda hacer operaciones complejas de mas de 2 cifras
//! Que funciones los parentesis devidamente


// Elementos del index.html
const objCE = document.querySelector(".CE");
const objParentesis = document.querySelector(".parentesis");
const objPorcentaje = document.querySelector(".porcentaje");
const objDivision = document.querySelector(".division");
const objSiete = document.querySelector(".siete");
const objOcho = document.querySelector(".ocho");
const objNueve = document.querySelector(".nueve");
const objMultiplicar = document.querySelector(".multipilicar");
const objCuatro = document.querySelector(".cuatro");
const objCinco = document.querySelector(".cinco");
const objSeis = document.querySelector(".seis");
const objMenos = document.querySelector(".menos");
const objUno = document.querySelector(".uno");
const objDos = document.querySelector(".dos");
const objTres = document.querySelector(".tres");
const objMas = document.querySelector(".mas");
const objBorrar = document.querySelector(".borrar");
const objCero = document.querySelector(".cero");

const ObjPunto = document.querySelector(".punto");
const ObjIgual = document.querySelector(".igual");

let pantallaValue = document.querySelector(".pantalla").innerHTML;
let operacionPendiente = null;
let operador1 = 0;
let operador2 = 0;

//Funcion para borrar pantalla
objCE.addEventListener("click", () => {
    operador1 = 0;
    operador2 = 0;
    operacionPendiente = null;
    pantallaValue = "";
    document.querySelector(".pantalla").innerHTML = "";
})

//Funcion para borrar
objBorrar.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML = document.querySelector(".pantalla").innerHTML.slice(0, -1);
    pantallaValue = document.querySelector(".pantalla").innerHTML;
    
})

//Funcion para cada boton
objCero.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objCero.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objUno.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objUno.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objDos.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objDos.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objTres.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objTres.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objCuatro.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objCuatro.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objCinco.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objCinco.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objSeis.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objSeis.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objSiete.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objSiete.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objOcho.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objOcho.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

objNueve.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objNueve.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

ObjPunto.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += ObjPunto.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});


objParentesis.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML += objParentesis.innerHTML;
    pantallaValue = document.querySelector(".pantalla").innerHTML;
});

// Función para realizar la operación
const realizarOperacion = () => {
    switch (operacionPendiente) {
        case '+':
            pantallaValue = (operador1 + operador2).toFixed(2);
            break;
        case '-':
            pantallaValue = (operador1 - operador2).toFixed(2);
            break;
        case 'x':
            pantallaValue = (operador1 * operador2).toFixed(2);
            break;
        case '/':
            pantallaValue = operador2 !== 0 ? (operador1 / operador2).toFixed(2) : "Error: División por cero";
            break;
        case '%':
            pantallaValue = (operador1 % operador2).toFixed(2);
            break;
        default:
            console.log("Error");
            break;
    }

    // Verificar si el resultado tiene decimales
    if (Number(pantallaValue) === parseInt(pantallaValue)) {
        pantallaValue = parseInt(pantallaValue); // Convertir a entero si no hay decimales
    }

    // Mostrar el resultado en la pantalla
    document.querySelector(".pantalla").innerHTML = pantallaValue;
};




// Botón de suma
const sumar = () => {
    operador1 = Number(pantallaValue);
    operacionPendiente = '+';
    document.querySelector(".pantalla").innerHTML = `${operador1} + `;
    console.log(operador1);
}


// Botón de resta
const restar = () => {
    operador1 = Number(pantallaValue);
    operacionPendiente = '-';
    document.querySelector(".pantalla").innerHTML = `${operador1} - `;
    console.log(operador1);
}

// Botón de multiplicar
const multiplicar = () => {
    operador1 = Number(pantallaValue);
    operacionPendiente = 'x';
    document.querySelector(".pantalla").innerHTML = `${operador1} x `;
    console.log(operador1);
}

// Botón de division
const division = () => {
    operador1 = Number(pantallaValue);
    operacionPendiente = '/';
    document.querySelector(".pantalla").innerHTML = `${operador1} / `;
    console.log(operador1);
}

// Botón de porcentaje
const porcentaje = () => {
    operador1 = Number(pantallaValue);
    operacionPendiente = '%';
    document.querySelector(".pantalla").innerHTML = `${operador1} % `;
    console.log(operador1);
}

// Función para procesar el botón de igual
const igual = () => {
    const partes = pantallaValue.split(operacionPendiente);

    operador2 = partes.length > 1 ? Number(partes[1]) : 0;

    realizarOperacion();

    operacionPendiente = null;
}

objMas.addEventListener("click", sumar);
objMenos.addEventListener("click", restar);
objMultiplicar.addEventListener("click", multiplicar);
objDivision.addEventListener("click", division);
objPorcentaje.addEventListener("click", porcentaje);
ObjIgual.addEventListener("click", igual);


