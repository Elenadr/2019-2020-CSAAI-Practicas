console.log("Executing javascript...");

const canvas = document.getElementById("canvas");
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);
//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='gold';

//-- x,y, anchura, altura
ctx.rect(300, 200, 30, 30);
ctx.fill();

//------- Dibujar las raquetas
ctx.beginPath();
ctx.fillStyle='darkblue';

//-- Raqueta izquierda
ctx.rect(50, 100, 10, 60);

//-- Raqueta derecha
ctx.rect(550, 300, 10, 60);

//-- Pintar!
ctx.fill();
