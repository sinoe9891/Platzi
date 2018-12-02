////////------------Ejemplo 1-------------

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

// ////////------------Ejercicio1-------------
function imprimirNombreYEdad(persona) {
    var nombre = persona.nombre
    var edad = persona.edad
    console.log('Hola, me llamo ' + nombre.toUpperCase() + ' y tengo ' + edad + ' años.')
}

////////------------Ejercicio2-------------
function imprimirNombreYEdad(persona) {
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)
}


////////------------Ejercicio3-------------
function imprimirNombreYEdad({ nombre, edad }) {
    console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años.`)
}

imprimirNombreYEdad(danny)