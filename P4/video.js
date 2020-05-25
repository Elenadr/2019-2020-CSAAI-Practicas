//-- Archivo .js Elena del Río P4
console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=326;  //-- Tamaño de la pantalla de video

video1.src="https://github.com/Elenadr/Resources/raw/master/alwayss.mp4"

const video2 = document.getElementById("video2")
video2.width=326;  //-- Tamaño de la pantalla de video

video2.src="https://github.com/Elenadr/Resources/raw/master/hermone.mp4"

const video3 = document.getElementById("video3")
video3.width=320;  //-- Tamaño de la pantalla de video

video3.src="https://github.com/Elenadr/Resources/raw/master/voldemort.mp4"

const video4 = document.getElementById("video4");
video4.width=640;  //-- Tamaño de la pantalla de video

video4.poster="https://github.com/Elenadr/Resources/raw/master/intro.gif";

document.getElementById('muted').style.display = 'none';
document.getElementById('unmuted').style.display = 'none';
document.getElementById('loop').style.display = 'none';
  document.getElementById('noloop').style.display = 'none';

  document.getElementById('static').style.display = 'none';

const play1 = document.getElementById("play1");
play1.onclick = () => {
  console.log("Click 1");
    video4.poster=false;
    video4.src=video1.src;
    video4.muted=false;
    video1.style.border = "thick solid red";
    video2.style.border = "#533E03 4px solid"
    video3.style.border = "#533E03 4px solid"
    document.getElementById('muted').style.display = 'block';
    document.getElementById('unmuted').style.display = 'none';
    document.getElementById('loop').style.display = 'block';

      document.getElementById('static').style.display = 'block';
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
  document.getElementById('muted').style.display = 'block';
document.getElementById('unmuted').style.display = 'none';
  document.getElementById('loop').style.display = 'block';

    document.getElementById('static').style.display = 'block';

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
  document.getElementById('muted').style.display = 'block';
document.getElementById('unmuted').style.display = 'none';
  document.getElementById('loop').style.display = 'block';

    document.getElementById('static').style.display = 'block';


};

const static = document.getElementById("static");
static.onclick = () => {
  console.log("Estatico");
  video4.poster="https://github.com/Elenadr/Resources/raw/master/DOBY.png"
  video4.src = false;
  video1.style.border = "none";
  video2.style.border = "none";
  video3.style.border = "none";
  document.getElementById('muted').style.display = 'none';
document.getElementById('unmuted').style.display = 'none';
  document.getElementById('loop').style.display = 'none';
    document.getElementById('static').style.display = 'none';

};

const muted= document.getElementById("muted");
muted.onclick = () => {
  console.log("Muted");
  video4.muted=true;
  document.getElementById('unmuted').style.display = 'block';
};

const unmuted= document.getElementById("unmuted");
unmuted.onclick = () => {
  console.log("UnMuted");
  video4.muted=false;

};
const iniciar = 10;
const final = iniciar + 2;
var loo = false;
setInterval(()=>{
  if(loo==true){
    if (video4.currentTime > final){
      video4.currentTime = iniciar;
    }else if (video4.currentTime < iniciar) {
      video4.currentTime = iniciar;
    }
  }
},20);

const loop= document.getElementById("loop");
loop.onclick = () => {
  console.log("Loop");
  loo=true;
  video4.currentTime = 2.0;
  video4.muted=false;
  loop.style.border = "thick solid green";
  document.getElementById('noloop').style.display = 'block';

};

const noloop= document.getElementById("noloop");
noloop.onclick = () => {
  console.log("No Loop");
  loo=false;
  video4.currentTime
  loop.style.border = "none";
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
