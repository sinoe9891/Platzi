var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "red";
  lienzo.moveTo(100,100);
  lienzo.lineTo(200,200);
  lienzo.stroke();
  lienzo.closePath();
}
