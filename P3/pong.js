console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");
//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");
//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
const sonido_tanto = new Audio("pong-tanto.mp3");

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;


var scoreD=0;
var scoreI=0;

//-- Pintar todos los objetos en el canvas
function draw() {

  //-- Dibujar el texto de comenzar
if (estado == ESTADO.INIT) {
  ctx.font = "40px HARRYP__";
  ctx.fillStyle = "#5b4606";
  ctx.fillText("Pulsa Start!", 30, 350);
}
//-- Dibujar el texto de sacar
if (estado == ESTADO.SAQUE) {
  ctx.font = "40px HARRYP__";
  ctx.fillStyle = "yellow";
  ctx.fillText("Saca!", 30, 350);
}
//----- Dibujar la Bola
//-- Solo en el estado de jugando
if (estado == ESTADO.JUGANDO) {
 bola.draw();
}
  //----- Dibujar la Bola
  bola.draw();

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([4, 0]);
  ctx.strokeStyle = '#A98727';
  ctx.lineWidth = 5;
  ctx.arc(300,200,60,0,2*Math.PI);
  ctx.stroke();

  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "40px HARRYP__";
  ctx.fillStyle = "white";
  ctx.fillText("Gryffindor: " +scoreI, 30, 80);
  ctx.fillText("Slytherin: " +scoreD, 340, 80);
  ctx.beginPath();

}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.x > canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola

    scoreI=scoreI+1;
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
    console.log('gooooool de gryyyyfindooor');
  } else if (bola.x <= (canvas.width==0)){
    scoreD++;
    sonido_tanto.currentTime = 0;
    sonido_tanto.play()
    console.log('gooooool de slytheryn');
}
    if (bola.y >= canvas.height){
    bola.vy = bola.vy * -1;
  } else if (bola.y <= 0){
    bola.vy = bola.vy * -1;
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height) &&
      (raqD.v <= 0)) {
        bola.vx = bola.vx * -1;
  } else {

  }
  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //Comprobar si la raqueta toca los bordes del canvas
  if (raqI.y <=0){
    raqI.y = raqI.y * -1;
  }
  //Comprobar si la raqueta toca los bordes del canvas
  if (raqD.y <=0){
    raqD.y = raqD.y * -1;
  }
  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
  window.requestAnimationFrame(animacion);
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación

  animacion();


//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  switch (e.key) {
    case "a":
      raqI.v = raqI.v_ini;
      break;
    case "q":
      raqI.v = raqI.v_ini * -1;
      break;
    case "p":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
      raqD.v = raqD.v_ini;
      break;
    case " ":

    //-- Reproducir sonido
      sonido_raqueta.currentTime = 0;
      sonido_raqueta.play();

      //-- Llevar bola a su posicion incicial
      bola.init();

      //-- Darle velocidad
      bola.vx = bola.vx_ini;
      bola.vy = bola.vy_ini;
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}
