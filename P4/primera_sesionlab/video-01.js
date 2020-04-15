console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones
const play = document.getElementById("play")
const stop = document.getElementById("stop")

//-- Función de retrollamada del botón de ver
play.onclick = () => {
  console.log("Click!");
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.play();
};

//-- Funcion de retrollamada del boton de parar
stop.onclick = () => {
  video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src=null;
}
