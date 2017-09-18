var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


dibujarLinea("#981818", 1,1,1,300);
dibujarLinea("#981818", 1,300,300,300);
dibujarLinea("#981818", 300,0,300,300);
dibujarLinea("#981818", 300,00,0,0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujoPorClick()
{
  var x = parseInt(texto.value);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var xf1;
  var espacio = ancho / lineas;

  for (var l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xf1 = 300 - (l * 10);
    // Inf-Izquierda
    dibujarLinea("#981818", 0, yi, xf, 300);
    // Inf-Derecha
    dibujarLinea("#981818", 300, yi, xf1, 300);
     // Sup-Izquierda
    dibujarLinea("#981818", xf1, 0, 0, xf);
    // Sup-Derecha
    dibujarLinea("#981818", 300, xf1, xf1, 0);
  }
}
