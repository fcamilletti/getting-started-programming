var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50, 10);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(134, 200);
lienzo.lineTo(100, 50);
lienzo.stroke();
lienzo.closePath();