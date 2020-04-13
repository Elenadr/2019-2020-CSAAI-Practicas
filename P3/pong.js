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


//----- Dibujar la Bola
//-- Solo en el estado de jugando
if (estado == ESTADO.JUGANDO) {
 bola.draw();
}
  //----- Dibujar la Bola


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

  //-- Dibujar el texto de comenzar
if (estado == ESTADO.INIT) {
  ctx.font = "40px HARRYP__";
  ctx.fillStyle = '#A98727';
  ctx.fillText("PRESS ENTER!", 30, 350);
  console.log('init');
}
//-- Dibujar el texto de sacar
if (estado == ESTADO.SAQUE) {

  //------ Dibujar el tanteo
  ctx.font = "40px HARRYP__";
  ctx.fillStyle = "white";
  ctx.fillText("Gryffindor: " +scoreI, 110, 50);
  ctx.fillText("Slytherin: " +scoreD, 320, 50);
  ctx.beginPath();

if ((scoreD == 0) & (scoreI==0)){
  ctx.font = "40px HARRYP__";
  ctx.fillStyle = "#A98727";
  ctx.fillText("SpaceBar for Serve", 30, 370);
}

}


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
  if (bola.x >= canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola
    scoreI++;
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
    console.log('gooooool de gryyyyfindooor');
    estado = ESTADO.SAQUE;
     bola.dcha();
     console.log("Tanto!!!!");
     return;
  } else if (bola.x <= (canvas.width==0)){
    scoreD++;
    sonido_tanto.currentTime = 0;
    sonido_tanto.play()
    console.log('gooooool de slytheryn');
    estado = ESTADO.SAQUE;
     bola.init();
     console.log("Tanto!!!!");
     return;
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
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();
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
setInterval(()=>{
  animacion();
},16);


  //-- Retrollamada de las teclas
  window.onkeydown = (e) => {
    if (e.key == 'Enter'){
      estado = ESTADO.SAQUE;
      console.log("SAQUE!");
      canvas.focus();
  }
    //-- En el estado inicial no se
    //-- hace caso de las teclas
    if (estado == ESTADO.INIT)
      return;



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

        //-- El saque solo funciona en el estado de SAQUE
        if (estado == ESTADO.SAQUE) {
          //-- Reproducir sonido
          sonido_raqueta.currentTime = 0;
          sonido_raqueta.play();

          //-- Llevar bola a su posicion incicial

          bola.init();

          //-- Darle velocidad
            bola.vx = bola.vx_ini;
            bola.vy = bola.vy_ini;

          //-- Cambiar al estado de jugando!
          estado = ESTADO.JUGANDO;

          return false;
        }
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

const stop = document.getElementById("stop");

stop.onclick = () => {
  //-- Volver al estado inicial
  estado = ESTADO.INIT;
  bola.init();
  console.log('stop');
   scoreD=0;
   scoreI=0;


}
