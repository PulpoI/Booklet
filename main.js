//Booklet 2 actividad 1

//1
let ingresaNombre = prompt("Ingresa un nombre")
let nombre = "PABLO"
if (ingresaNombre.toUpperCase() == nombre){
    alert("Fui yo")
}else{
    alert("No fui yo")
}

//2
let letra = prompt("Presiona una tecla");
if(letra.toUpperCase() == "Y"){
    alert("Correcto");
}else{
    alert("Error")
}

//3
let numero = parseInt(prompt("Escribe un numero del 1 al 4"));
let homero = 1;
let marge = 2;
let bart = 3;
let lisa = 4; 
if(numero == 1){
    alert("Elegiste a Homero")
}else if(numero == 2){
    alert("Elegiste a Marge")
}else if(numero == 3){
    alert("Elegiste a Bart")
}else if(numero == 4){
    alert("Elegiste a Lisa")
}else{
    alert("Error")
}

//4 
let numeroPresu = parseInt(prompt("Ingresa el total del presupuesto"))
if(numeroPresu <= 1000){
    alert("Presupuesto bajo")
}else if(numeroPresu > 1000 && numeroPresu <= 3000){
    alert("Presupuesto medio")
}else{
    alert("Presupuesto alto")
}

//5
let producto1 = prompt("Ingrese producto 1")
let producto2 = prompt("Ingrese producto 2")
let producto3 = prompt("Ingrese producto 3")
let producto4 = prompt("Ingrese producto 4")
if(producto1 != "" && producto2 != "" && producto3 != "" && producto4 != ""){
    alert("Su pedido es: " + producto1 + ", " + producto2 + ", " + producto3 + " y " + producto4 + ".")
}else{
    alert("Error: Es necesario cargar todos los productos")
}