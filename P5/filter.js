console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext("2d");



//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');

//-- Función de retrollamada de imagen cargada

img.onload = function () {
  console.log("Imagen cargada");
  canvas.width = img.width;
  canvas.height =  img.height;
  ctx.drawImage(img,0,0);
};



const grey = document.getElementById('grey');
grey.onclick= ()=>{
  console.log('etamos');

  var bright = 0;
  //--Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  //--Obtener el array con todos los píxeles
  let data = imgData.data;
  //--Calcular brillo para cada pixel
  for (let i = 0; i < data.length; i+=4) {
    bright = (3*data[i] + 4*data[i+1]+ data[i+2])/8
    data[i] = data[i+1] = data[i+2] = bright;
  }
  //--Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0,0);
}
const original = document.getElementById('original');
original.onclick= ()=>{
  console.log('original');
  ctx.drawImage(img, 0,0);
}
console.log("Fin...");
