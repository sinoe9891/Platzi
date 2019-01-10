////////------------Ejemplo 1-------------

var danny = {
    // nombre es key o llave y danny es valor
    nombre: 'Danny',
    apellido: 'Velasquez',
    edad: 29.5,
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
function imprimirNombreInformarcion(varLocal) {
    var nombre = varLocal.nombre
    var edad = varLocal.edad
    var universidad = varLocal.universidad
    console.log(`Ejemplo1- Hola, me llamo ${nombre.toUpperCase()}  y tengo ${edad} y trabajo en la universidad Panamericana ${universidad}`)
}

imprimirNombreInformarcion(danny)
    // De esta forma destructuramos los objetos en una sola línea
    //////------------Ejercicio2-------------
function imprimirNombreYEdad(varLocal) {
    var { nombre, edad, universidad } = varLocal
    console.log(nombre, edad)
        // console.log(nombre.toUpperCase(), edad.toFixed(0))
        // console.log(`Ejemplo2- Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años y trabajo en la Escuela Agrícola Panamericana ${universidad.toUpperCase()}`)
}
imprimirNombreYEdad(danny)
    // Este es otro ejemplo de destructurar objetos
    ////------------Ejercicio3-------------
function imprimirNombreYEdad1({ nombre, edad, universidad }) {
    console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años y trabajo en la universidad ${universidad.toUpperCase()}`)
}
imprimirNombreYEdad1(danny)


// Reto