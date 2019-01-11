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
imprimirNombreYEdad(danny)

function cumpleanos(varLocal) {
    varLocal.edad += 1
}
// cumpleanos()