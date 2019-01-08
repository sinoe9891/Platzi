/* 
    Operadores con numeros:
    para sumar se usa +
    para restar se usa -
    para multiplicar se usa *
    para dividir se usa /
*/

var edad = 27

// Incremento
// edad = edad + 1
var peso = 75
edad += 1

edad += 1 //lo que ya tenia edad mas 1 (edad vale 25)
edad++ //lo que vale edad mas 1 (edad vale 26)
edad -= 1 //lo que ya tenia edad menos 1 (edad vale 25)
edad-- //lo que ya tenia edad menos 1 (edad vale 24)

// peso = peso - 2
peso -= 2
    // Resultado = 73

// sumar
var sandwich = 1
    // peso = peso + sandwich ó
peso += sandwich

// restar
var jugarFutbol = 3
    // peso = peso - jugarFutbol ó
peso -= jugarFutbol
    // Decimales


// Ejemplo decimales
var preciovino = 200.3
var total = preciovino * 3
    // Resultado= 600.900000000001
    // reucir decimales

total = preciovino * 100 * 3 / 100
    // Resultado = 600.9

// modulo matematico
var total = Math.round(preciovino * 100 * 3) / 100

// aumentar los decimales pero en strings
var totalStr = total.toFixed(2)
    // Resultado= "600.90"

// pasar string a numero
var total2 = parseFloat(totalStr)

// division
var pizza = 8
var personas = 2

var cantidadporcionesporpersona = pizza / personas

console.log('Tocan ' + cantidadporcionesporpersona + ' por persona')
console.log(`Tocan ${cantidadporcionesporpersona} por persona`)