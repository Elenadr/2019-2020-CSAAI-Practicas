
//--https://giphy.com/explore/la-casa-de-papel
//--url para descargar gifs utiles para mi practica

//--Mirar S6 donde hay ejemplos de autoreproduccion, video con controles,
//--control desde js, youtube.
console.log("Ejecutando JS...");

//--Obtener elemento de vído y configurarlo
const video1 =  document.getElementById("video1")
video1.width = 200; //--Tamaño de la pantalla de video
video1.height = 100;

const video2 = document.getElementById("video2");
video2.width = 200; //--Tamaño de la pantalla de video
video2.height = 100;

const video3 = document.getElementById("video3");
video3.width = 200; //--Tamaño de la pantalla de video
video3.height = 100;
//--Obtener los botones

const play2 = document.getElementById("play2");
const play3 = document.getElementById("play3");


//--Función de retrollamda del botón ver

  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

play2.onclick = () =>{
  console.log("Click!");
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.play();
};
play3.onclick = () =>{
  console.log("Click!");
  video3.src="https://github.com/yolandalillo/mis_recursos/raw/master/video1.mp4"
  video3.play();
};
