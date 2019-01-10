// variable global
var nombre = 'Danny'

function imprimirMayuscula() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
        // document.getElementById("boton").innerHTML = nombre.toUpperCase();
}

imprimirMayuscula()

// Variable Local - se modifica la variable global dentro del cuerpo de la funcion.
function imprimirMinuscula(n) {
    n = n.toLowerCase()
    console.log(n)
}
imprimirMinuscula(nombre)

function imprimirMinusculas(nombreM) {
    nombreM = nombreM.toLowerCase()
    console.log(nombreM)
}
imprimirMinusculas(nombre)

// Ejemplo de mostrar string en al hacer click en un botonvar nombre = 'Danny'

function clickString() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
    document.getElementById("boton").innerHTML = nombre.toUpperCase();
}
// no se necesita ejecutar la función ya que se ejecutará al hacer click en el boton