var nombre = 'Danny',
    apellido = 'Velásquez'

var nombre_completo = (nombre + ' ' + apellido)

// var nombreCompleto = `${nombre} ${apellido}`
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

console.log(nombre_completo)
    // Nombre nombreMayuscula
var nombreMayuscula = nombre.toLocaleUpperCase()
    // Apellido Minuscula
var apellidoMinuscula = apellido.toLocaleLowerCase()

// saber la primerla letra de su nombre
var primerLetraNombre = nombre.charAt(0)

var cantidadLetrasNombre = nombre.length

// ve la segunda y tercera letra del nombre Danny
var str = nombre.charAt(1) + nombre.charAt(2)

// Mostrar las primeras 3 letras de nombre (Danny)
var str1 = nombre.substr(0, 3)
    // Resultado = Dan

console.log('La útima letra del nombre Danny es: ' + `${str1}`)

// Saber cual es la ultima letra de Danny
var str = nombre.substr(-1)
console.log('La útima letra del nombre Danny es: ' + `${str}`)

var ultimaLetra = nombre.charAt(nombre.length - 1)
console.log('La útima letra del nombre Danny es: ' + `${ultimaLetra}`)

// Resultado = La útima letra del nombre Danny es: y