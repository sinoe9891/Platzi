// Los strings son cadenas de texto. Para indicar que estamos usando una cadena de texto debemos de colocar las comillas simples.
// En este curso utilizaremos los métodos:
//     toUpperCase, que sirve para transformar un String a mayúsculas.
//     toLowerCase, que sirve para transformar el string a minúsculas.
// También usaremos el atributo:
//     length, que nos indica la cantidad de caractéres que tiene un string.
// Para concatenar dos strings se utiliza el símbolo (+)
// var nombreCompleto = nombre + ’ ’ + apellido
// ---------------------------
var nombre = 'Danny',
    apellido = 'Velásquez'

// Pasar nombre a MAyuscula con la función toLocaleUpperCase
var nombreEnMayuscula = nombre.toLocaleUpperCase();
console.log(nombreEnMayuscula + ' nombre en Mayuscula')

// Pasar apellido a Minuscula con la función toLocaleLowerCase
var apellidoEnMinuscula = apellido.toLocaleLowerCase();
console.log(apellidoEnMinuscula + ' apellido en Minuscula')

//Ver cual es la primer letra del string con chartAt, la primera posición de un string siempre es 0.
var primerLetraDelNombre = nombre.charAt(0);
console.log(primerLetraDelNombre + ' primer letra del string nombre con charAt')

// Cantidad de caracteres de un string
var cantidadDeLetrasDelNombre = nombre.length
console.log(cantidadDeLetrasDelNombre + ' esta es la cantidad de caracteres que tiene')
console.log(nombre.length)
    // Se puede modificar en CONSOLA el nombre y contar nuevamente de esta forma
    // nombre = "Andrea Michell Reyes Rosales"
    // cantidadDeLetrasDelNombre = nombre.length

// Aquí concatenamos con un espacio vacio con ' ' .
var nombre_completo = (nombre + ' ' + apellido)
console.log(nombre_completo)

// Usaremos las comillas invertidas (`)
//Esto nos sirve para interpolar variables con string y podemos usar espacios en medio de las variables
var nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

var nombreCompletoApellidoMayus = `${nombre} ${apellido.toUpperCase()}`
console.log(nombreCompletoApellidoMayus)


// ve la segunda(1) y tercera(4) letra del nombre Danny
var str = nombre.charAt(1) + nombre.charAt(4)
console.log(str + ' este es el resultado de saber cual es la letra 1 y la letra 4')

// Mostrar las primeras 4 letras de nombre (Danny)
var strSubstr = nombre.substr(0, 4)
    // Resultado = Dann

// para ver la ultima letra de cualquier nombre sería:
// Ejemplo 1
// Los números negativos cuentan de atrás hacia adelante (De derecha a Izquierda), así que -1 vendría a ser la “primera” letra de atrás hacia adelante.
var ultimaLetra = nombre.substr(-1)
console.log(ultimaLetra + ' ultima letra del nombre danny')
    // Ejemplo 2
var str1 = nombre.charAt(nombre.length - 1)
console.log(str1 + ' ultima letra del nombre danny')
console.log(nombre.charAt() + ' la primera letra y la ultima del nombre danny')
console.log(nombre.length + ' cantidad de letras del nombre danny')