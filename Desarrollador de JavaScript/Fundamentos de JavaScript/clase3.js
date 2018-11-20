var edad = 27

// Incremento
// edad = edad + 1
edad += 1

var peso = 75

// peso = peso - 2

peso -= 2

// sumar

var sandwich = 1

peso = peso + sandwich

// restar
var jugarFutbol = 3

peso = peso - jugarFutbol

// Decimales

var preciovino = 200.3

var total = preciovino * 3

// reucir decimales

total = preciovino * 100 * 3 / 100

// modulo matematico

var total = Math.round(preciovino * 100 * 3) / 100

// aumentar los decimales pero en strings
var totalStr = total.toFixed(2)

// pasar a numero
var total2 = parseFloat(totalStr)

// division
var pizza = 8
var personas = 2

var cantidadporcionesporpersona = pizza / personas


console.log('Tocan ' + `${cantidadporcionesporpersona}` + ' por persona')