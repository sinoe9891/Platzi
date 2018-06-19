var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xf1;
var tamañow, tamañoh;
tamañow = screen.height;
tamañoh = screen.height;
d.setAttribute("height", tamañoh);
d.setAttribute("width", tamañow);


for (var l = 0; l < lineas; l++) {
  yi = 24 * l;
  xf = 24 * (l + 1);
  xf1 = tamañow - (l * 24);
  // Inf-Izquierda
  dibujarLinea("#981818", 0, yi, xf, tamañoh);
  // Inf-Derecha
  dibujarLinea("#981818", tamañow, yi, xf1, tamañoh);
   // Sup-Izquierda
  dibujarLinea("#981818", xf1, 0, 0, xf);
  // Sup-Derecha
  dibujarLinea("#981818", tamañow, xf, yi, 0);
}
//Linéa Izquirda
dibujarLinea("#981818", 1,1,1,tamañoh);
//Linéa abajo
dibujarLinea("#981818", 1,tamañoh,tamañow,tamañoh);
//Linéa derecha
dibujarLinea("#981818", tamañow,0,tamañow,tamañoh);
//Linea arriba
dibujarLinea("#981818", tamañow,0,0,0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
