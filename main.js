//Actividad clase 3 

// 1 - El pizarron

// numeroPizarron = parseInt(prompt("Ingresa la cantidad de veces que queres que aparezca tu mensaje:"));

// while (numeroPizarron == null || numeroPizarron == "" || isNaN(numeroPizarron) || numeroPizarron <= 0) {
//     numeroPizarron = parseInt(prompt("Ingresa la cantidad de veces que queres que aparezca tu mensaje:"));
// }

// textoPizarron  = prompt("Ingresa el texto");

// for (let i = 1; i <= numeroPizarron; i++){
//     console.log(i + " " + textoPizarron);
// }


// 2 - Cuadrado ordinario

// let lados = prompt("Ingresar cantidad de lados")
// for (let i = 1; i <= lados; i++){
//     if (i >= 5){
//         break;
//     }
//     alert("lado" + " "  + i);
// }

// 3 - Registro de alumnos 

// let alumnos = "";
// for (let i = 0; i < 10; i++){
//     alumnos += prompt("Ingresa el nombre del alumnos") + "\n";   
// }

// alert (alumnos);

//  4 - El innombrable 
// let nombre = prompt("Ingresa un personaje");
// let lista = "";
// while (nombre != "Voldemort") {
//     lista += nombre + "\n";
//     nombre = prompt("Ingresa un personaje");
// }
// alert(lista)

// 5 - Comprando productos
let entrada = prompt("Seleccionar productos 1 - 4. Escriba ESC para terminar")
while (entrada != "ESC") {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3": 
            alert("Pollo");
            break;
        case "4": 
            alert("Carne");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("Seleccionar productos 1 - 4")
}
