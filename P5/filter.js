console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');



//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
canvas.width = img.width;
canvas.height = img.height;
//-- Obtener el contexto del canvas para trabajar con el


//-- Situar la imagen original en el canvas
//-- No se han hecho manipulaciones todavia
ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//-- Funcion de retrollamada del deslizador
deslizador.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

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

console.log("Fin...");
