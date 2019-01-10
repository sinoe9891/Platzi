var danny = {
    // nombre es key o llave y danny es valor
    nombre: 'Danny',
    apellido: 'Velasquez',
    edad: 29.5,
    universidad: 'ZAMORANO'
}


imprimirNombreInformarcion(danny)
    //////------------Ejercicio1-------------
function imprimirNombreYEdad(varLocal) {
    var { nombre, edad, universidad } = varLocal
    console.log(nombre, edad)
        // console.log(nombre.toUpperCase(), edad.toFixed(0))
        // console.log(`Ejemplo2- Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años y trabajo en la Escuela Agrícola Panamericana ${universidad.toUpperCase()}`)
}
imprimirNombreYEdad(danny)

// Reto