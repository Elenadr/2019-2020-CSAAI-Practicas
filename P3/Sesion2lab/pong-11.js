console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Variables para la bola
let bola_x = 50;
let bola_vx = 0;

//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- x,y, anchura, altura
  ctx.rect(bola_x, 200, 10, 10);
  ctx.fill();

  //------- Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- Raqueta izquierda
  ctx.rect(50, 100, 10, 40);

  //-- Raqueta derecha
  ctx.rect(540, 300, 10, 40);

  //-- Pintar!
  ctx.fill();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("0", 200, 80);
  ctx.fillText("1", 340, 80);
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola_x >= canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola_vx = bola_vx * -1;
  }
  if (bola_x <= canvas.width) {
    bola_vx = bola_vx * +1;
  }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola_x += bola_vx;

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {

    //-- Tecla ESPACIO: Saque
    case " ":
      bola_x = 50;
      bola_vx = 6;
  }
}
