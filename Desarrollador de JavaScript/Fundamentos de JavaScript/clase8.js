var danny = {
    nombre: 'Danny',
    apellido: 'Velasquez',
    edad: 29,
    universidad: 'ZAMORANO'
}

function imprimirNombreYEdad(varLocal) {
    var { nombre, edad, universidad } = varLocal
    console.log(nombre, edad, universidad)
}

console.log(imprimirNombreYEdad(danny))

// Ejemplo 2
// function cumpleanos(varLocal) {
//     varLocal.edad += 1
// }
// cumpleanos()

// si observamos que cuando llamamos al objeto danny tien 29
// pero si llamamos la funcion veremos reflejado que se sumó uno
// al momento de llamar al objeto nuevamente.

// Ejemplo3
// Podemos devolver un nuevo objeto, este debería de tener lo mismo de la varLocal excepto la edad que debe de ser += 1
//usamos ... 
function cumpleanos(varLocal) {
    return { //retornar de esta funcion un objeto copiando todo del objeto anterior con ...varLocal, desglosamos a la varLocal dentro de este nuevo objeto pero podemos pisar sus atributos
        ...varLocal, //
        edad: varLocal.edad + 1 //podemos modificar la edad
    }
}
console.log(cumpleanos(danny))
    // Ejemplos en consola
    // cumpleanos(danny)
    // {nombre: "Danny", apellido: "Velasquez", edad: 30, universidad: "ZAMORANO"}
    // Resultado: danny
    // {nombre: "Danny", apellido: "Velasquez", edad: 29, universidad: "ZAMORANO"}
    // var dannyViejo = cumpleanos(danny)
    // Resultado: undefined
    // dannyViejo
    // Resultado: {nombre: "Danny", apellido: "Velasquez", edad: 30, universidad: "ZAMORANO"}
    // danny
    // Resultado: {nombre: "Danny", apellido: "Velasquez", edad: 29, universidad: "ZAMORANO"}

// Ejemplo 3

// Sin Return
var dividirPorCuatro1 = function(numero) {
    numero / 4;
}
var dividirCantidad1 = dividirPorCuatro1(27)
    // Imprimir
console.log(dividirPorCuatro1(27))
    // REsultado undefined

// Con Return
var dividirPorCuatro = function(numero) {
    return numero / 4;
}
var dividirCantidad = dividirPorCuatro(27)

// Imprimir
console.log(dividirPorCuatro(27))
    // Resultado 6.75

// ejemplo 4
function ejemplo(x) {
    return x * x
}
console.log(ejemplo(7))