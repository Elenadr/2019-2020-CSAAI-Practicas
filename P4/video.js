console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
  const video1 = document.getElementById("video1")
  video1.width=426;  //-- Tamaño de la pantalla de video
  video1.height=240;

  video1.src="https://github.com/Elenadr/Resources/raw/master/alwayss.mp4"

  const video2 = document.getElementById("video2")
  video2.width=426;  //-- Tamaño de la pantalla de video
  video2.height=240;
  video2.src="https://github.com/Elenadr/Resources/raw/master/hermone.mp4"

  const video3 = document.getElementById("video3")
  video3.width=420;  //-- Tamaño de la pantalla de video
  video3.height=236;
  video3.src="https://github.com/Elenadr/Resources/raw/master/voldemort.mp4"

const video4 = document.getElementById("video4");
video4.width=640;  //-- Tamaño de la pantalla de video
video4.height=380;
video4.poster="https://github.com/Elenadr/Resources/raw/master/ji.webp";

const imagen = document.getElementById("imagen");
imagen.width=326;
imagen.height=140;

const play1 = document.getElementById("play1");


play1.onclick = () => {
  console.log("Click 1");
    video4.poster=false;
    video4.src=video1.src;
    video4.muted=false;
    video1.style.border = "thick solid red";
    video2.style.border = "#533E03 4px solid"
    video3.style.border = "#533E03 4px solid"
    imagen.style.border = "none";

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


const play2 = document.getElementById("play2");
play2.onclick = () => {
  console.log("Click 2");
  video4.poster=false;
  video4.src=video2.src;
  video4.muted=false;
  video1.style.border = "#533E03 4px solid"
  video2.style.border = "thick solid red";
  video3.style.border = "#533E03 4px solid"
  imagen.style.border = "none";

};

const play3 = document.getElementById("play3");
play3.onclick = () => {
  console.log("Click 3");
  video4.poster=false;
  video4.src=video3.src;
  video4.muted=false;
  video1.style.border = "#533E03 4px solid"
  video2.style.border = "#533E03 4px solid"
  video3.style.border = "thick solid red";
  imagen.style.border = "none";

};

const static = document.getElementById("static");
static.onclick = () => {
  console.log("Estatico");
  video4.poster=imagen.src;
  video1.style.border = "none";
  video2.style.border = "none";
  video3.style.border = "none";
  imagen.style.border = "thick solid red";
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
