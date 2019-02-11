// var nombre = 'Danny',
//     edad = '28'

// function imprimirEdad() {
//     console.log(`${nombre} tiene ${edad} años`)
// }
// Una funcion esta compuesta por:

//     El nombre de la función function name
//     Argumentos o parametros de la función.(a, b)
//     y las sentecionas o procedimientos que definen la función. estas encerradas en llaves {}

// imprimirEdad()

var nombre = 'Danny',
    edad = '29'
    // se puede usar cualquier referencia como a, f ó n, e
function imprimirEdad(varnombre, varedad) {
    console.log(`${varnombre} tiene ${varedad} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 27)
imprimirEdad('Eric', 24)
imprimirEdad('Darío', 27)
imprimirEdad(27, 'Darío')


// Escribir menos codigo para lograr programar más de manera dinamica segun las variables proporcionadas