// Se podría trabajar así pero no es la mejor manera
// var nombredanny = 'Danny'
// var nombreleo = 'Leo'
// var nombrelaura = 'Laura'

// function imprimirMayuscula(nombre) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }
// imprimirMayuscula(nombredanny)
// imprimirMayuscula(nombreleo)
// imprimirMayuscula(nombrelaura)}

////////------------Ejemplo 1 y 4-------------------------------------

var danny = {
    // nombre es key o llave y danny es valor
    nombre: 'Danny',
    apellido: 'Velasquez',
    edad: 29
}

var andrea = {
    nombre: 'Andrea',
    apellido: 'Reyes',
    edad: 26
}

var universidad = {
        nombre: 'ZAMORANO',
        ubicacion: 'San Antonio de Oriente',
        Fundación: 1942
    }
    //     // esta es una variable local que no afecta la variable global
    // function imprimirMayuscula(personvarLocal) {
    //     personvarLocal = personvarLocal.toUpperCase();
    //     console.log(personvarLocal)
    // }

// imprimirMayuscula(danny.apellido)
// imprimirMayuscula(andrea.apellido)
// imprimirMayuscula(universidad.ubicacion)
// imprimirMayuscula('La Universidad ' + universidad.nombre + ' Esta Ubicada en ' + universidad.ubicacion)

// imprimirMayuscula(`La Universidad ${universidad.nombre} Esta ubicada en ${universidad.ubicacion}, Francisco Morazan, Honduras.`)
// Resultado:
//     VELASQUEZ
// REYES
// SAN ANTONIO DE ORIENTE
// LA UNIVERSIDAD ZAMORANO ESTA UBICADA EN SAN ANTONIO DE ORIENTE
// LA UNIVERSIDAD ZAMORANO ESTA UBICADA EN SAN ANTONIO DE ORIENTE

// //////-------Ejemplo 2-----------
// Ejemplo para recibir el objeto de la persona
// // esta es una variable local que no afecta la variable global
// function imprimirMayuscula(persona) {
//     var atributo1 = persona.nombre.toUpperCase();
//     console.log(atributo1)
// }
// imprimirMayuscula(danny)
//     // Resultado: DANNY
// imprimirMayuscula(andrea)
//     // Resultado: ANDREA

// ////////-------Ejemplo 3-----------------------------------------

// // esta es una variable local que no afecta la variable global
// function imprimirMayuscula(persona) {
//     console.log(persona.nombre.toUpperCase())
//     console.log(persona.apellido.toUpperCase())
// }
// imprimirMayuscula(danny)
// imprimirMayuscula(andrea)

// ////////------Ejemplo 5-----------------------------------------

// esta es una variable local que no afecta la variable global

function imprimirMayuscula({ nombre }) {
    console.log(nombre.toUpperCase())
}
imprimirMayuscula(danny)
imprimirMayuscula(andrea)
imprimirMayuscula(universidad)
imprimirMayuscula({ nombre: 'Andrea' })