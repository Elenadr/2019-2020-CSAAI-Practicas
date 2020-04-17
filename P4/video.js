console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
  const video1 = document.getElementById("video1")
  video1.width=400;  //-- Tamaño de la pantalla de video
video1.height=300;
  video1.src="https://github.com/Elenadr/Resources/raw/master/alwayss.mp4"

  const video2 = document.getElementById("video2")
  video2.width=400;  //-- Tamaño de la pantalla de video
  video2.height=300;
  video2.src="https://github.com/Elenadr/Resources/raw/master/hermone.mp4"

  const video3 = document.getElementById("video3")
  video3.width=400;  //-- Tamaño de la pantalla de video
  video3.height=300;
  video3.src="https://github.com/Elenadr/Resources/raw/master/voldemort.mp4"

const video4 = document.getElementById("video4");
video4.width=900;  //-- Tamaño de la pantalla de video
video4.height=700;
video4.poster="https://github.com/Elenadr/Resources/raw/master/aciion.gif";

const play1 = document.getElementById("play1");


play1.onclick = () => {
  console.log("Click 1");
    video4.src=video1.src;
    video4.loop=false;
    video4.muted=false;
};

var muted = document.getElementById("muted");
muted.onclick = () => {
  console.log("Muted true");
    video4.muted=true;
};

var loop = document.getElementById("loop");
loop.onclick = () => {
  console.log("loop true");
    video4.loop=true;
};
var noloop = document.getElementById("noloop");
noloop.onclick = () => {
  console.log("No loop");
    video4.muted=false;
};

var unmuted = document.getElementById("unmuted");
unmuted.onclick = () => {
  console.log("loop true");
    video4.muted=false;
};


const play2 = document.getElementById("play2");
play2.onclick = () => {
  console.log("Click 2");
  video4.src=video2.src;
  video4.muted=false;
  video4.loop=false;
};

const play3 = document.getElementById("play3");
play3.onclick = () => {
  console.log("Click 3");
  video4.src=video3.src;
  video4.muted=false;
  video4.loop=false;
};
//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
//document.getElementById("video1").onmouseenter = function() {mouseEnter()};
//document.getElementById("video1").onmouseleave = function() {mouseLeave()};

//function mouseEnter() {
//  video1.muted=false;

//}

//function mouseLeave() {
//  video1.muted=true;

//}
