////////------------Ejemplo 1-------------

var danny = {
    // nombre es key o llave y danny es valor
    nombre: 'Danny',
    apellido: 'Velasquez',
    edad: 29,
    universidad: 'ZAMORANO'
}

var andrea = {
    nombre: 'Andrea',
    apellido: 'Reyes',
    edad: 26,
    universidad: 'ZAMORANO'
}

var universidad = {
    universidad: 'ZAMORANO',
    nombre: 'EAP',
    ubicacion: 'San Antonio de Oriente',
    Fundación: 1942
}

// // ////////------------Ejercicio1-------------
function imprimirNombreYEdad(persona) {
    var nombre = persona.nombre
    var edad = persona.edad
    var universidad = persona.universidad
    console.log('Hola, me llamo ' + nombre.toUpperCase() + ' y tengo ' + edad + ' y trabajo en la universidad ' + universidad)
}

////////------------Ejercicio2-------------
function imprimirNombreYEdad(persona) {
    var { nombre, edad, universidad } = persona
    console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años y trabajo en la universidad ${universidad.toUpperCase()}`)
}

//////------------Ejercicio3-------------
function imprimirNombreYEdad({ nombre, edad, universidad }) {
    console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años y trabajo en la universidad ${universidad.toUpperCase()}`)
}

imprimirNombreYEdad(danny)