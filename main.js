//actividad 1
let nombre = "Homero";
let apellido = "Simpson"; 
let edad = 54;

//actividad 2
const chacabuco = "Chacabuco";
const junin = "Junin";
const chivilcoy = "Chivilcoy";
const pergamino = "Pergamino";
const rojas = "Rojas";

//actividad 3
let nombreYApellido = "Homero Simpson";
let documento = "38294029";
let direccion = "Belgrano 20";
let pais = "Argentina";
let carnet = "Datos de " + nombreYApellido + ": DNI: " + documento + " DIRECCION: " + direccion + " PAIS: " + pais; 

//actividad 4
/*
let padre = prompt("Nombre del padre?");
let madre = prompt("Nombre de la madre?");
let hijo = prompt("Nombre d20el hijo?");
let hija = prompt("Nombre de la hija?");
let abuelo = prompt("Nombre del abuelo?");
let familia = "Nombres de la familia: " + padre + ", " + madre + ", " + hijo + ", " + hija + ", " + abuelo + ".";
alert(familia);
*/

//actividad 5
/*
let precio = parseFloat(prompt("Ingrese precio"))
let descuento20 = precio - (precio * 0.2);
alert("El precio con descuento del 20% es " + descuento20);
*/

//Calculadora de porcentajes
let numero = parseFloat(prompt("Ingresa el numero"));
let porcentaje = parseFloat(prompt("Ingresa el porcentaje"));
let resultado = numero * porcentaje / 100;
let resultadoFinal = numero - resultado;
alert("El " + 
    porcentaje + 
    "% de " + 
    numero + 
    " es: " + 
    resultado +
    ". Quedaria en: " +
    resultadoFinal);

    