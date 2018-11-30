// var nombredanny = 'Danny'
// var nombreleo = 'Leo'
// var nombrelaura = 'Laura'

// function imprimirMayuscula(nombre) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }
// imprimirMayuscula(nombredanny)
// imprimirMayuscula(nombreleo)
// imprimirMayuscula(nombrelaura)

var danny = {
    nombre: 'Danny',
    apellido: 'Velasquez',
    edad: 28
}

var Leo = {
    nombre: 'Leonardo',
    apellido: 'Rodriguez',
    edad: 24
}

function imprimirMayuscula(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirMayuscula(danny.nombre)
imprimirMayuscula(Leo.nombre)