//Se creo un .js desde Github
let nombre = prompt("Ingrese nombre de Usuario:");
let sexo = prompt("Ingrese el sexo: M (masculino)/F (femenino)/ NB (no binario)");

function Recibimiento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

if (sexo == "M") {
    Recibimiento("h1",`Sea Bienvenido a la pagina de practica de Git y Github, Alumno ${nombre}`);
} else if (sexo == "F"){
    Recibimiento("h1",`Sea Bienvenido a la pagina de practica de Git y Github, Alumna ${nombre}`);
} else {
    Recibimiento("h1",`Sea Bienvenido a la pagina de practica de Git y Github, ${nombre}`);
}


















