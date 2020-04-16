console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo

video1.width=300;  //-- Tamaño de la pantalla de video
video1.height=200;
  video1.src="https://github.com/Elenadr/Resources/raw/master/alwayss.mp4"

  const video2 = document.getElementById("video2")
  video2.width=300;  //-- Tamaño de la pantalla de video
  video2.height=200;
  video2.src="https://github.com/Elenadr/Resources/raw/master/hermone.mp4"

  const video3 = document.getElementById("video3")
  video3.width=300;  //-- Tamaño de la pantalla de video
  video3.height=200;
  video3.src="https://github.com/Elenadr/Resources/raw/master/voldemort.mp4"

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
document.getElementById("video1").onmouseenter = function() {mouseEnter()};
document.getElementById("video1").onmouseleave = function() {mouseLeave()};
function mouseEnter() {
  video1.muted=false;
}

function mouseLeave() {
  video1.muted=true;
}
