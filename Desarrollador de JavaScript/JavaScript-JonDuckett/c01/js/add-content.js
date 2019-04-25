var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Buenas Noches!';
} else if (hourNow > 12) {
    greeting = 'Buenas tardes!';
} else if (hourNow > 0) {
    greeting = 'Buenos días!';
} else {
    greeting = 'Bienvenido!';
}

document.write('<h3>' + greeting + '</h3>');