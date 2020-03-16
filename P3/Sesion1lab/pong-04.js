console.log("Executing javascript...");

const canvas = document.getElementById("canvas");
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);
//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='gold';

//-- x,y, anchura, altura
ctx.rect(50, 200, 100, 60);
ctx.fill();

//------- Dibujar las raquetas
ctx.beginPath();
ctx.fillStyle='darkblue';

//-- Raqueta izquierda
ctx.rect(50, 100, 100, 60);

//-- Raqueta derecha
ctx.rect(550, 300, 100, 60);

//-- Pintar!
ctx.fill();

//--------- Dibujar la red
ctx.beginPath();

//-- Estilo de la linea: discontinua
//-- Trazos de 10 pixeles, y 10 de separacion
ctx.setLineDash([25, 10]);
ctx.strokeStyle = 'white';
ctx.lineWidth = 200;
//-- Punto superior de la linea. Su coordenada x está en la mitad
//-- del canvas
ctx.moveTo(canvas.width/2, 0);

//-- Dibujar hasta el punto inferior
ctx.lineTo(canvas.width/2, canvas.height);
ctx.stroke();
