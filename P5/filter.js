console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const ctx = canvas.getContext("2d");

//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');

//-- Ocutar controles
document.getElementById('controls').style.display = 'none';
document.getElementById('rangos').style.display = 'none';
document.getElementById('filterlab').style.display = 'none';



image1.onclick = () => {
  image1.onload = function(){
  };
  img = image1;
  image1.style.border="red 5px solid";
  image2.style.border="#533E03 8px solid";
  canvas.width = img.width;
  canvas.height =  img.height;
  ctx.drawImage(img, 0,0);
  document.getElementById('controls').style.display = 'block';
  document.getElementById('text').style.display = 'none';
  document.getElementById('filterlab').style.display = 'block';
}

image2.onclick = () => {
  image2.onload = function(){
  };
  img = image2;
  image1.style.border="#533E03 8px solid";
  image2.style.border="red 5px solid";
  canvas.width = img.width;
  canvas.height =  img.height;
  ctx.drawImage(img, 0,0);
  document.getElementById('controls').style.display = 'block';
  document.getElementById('text').style.display = 'none';
  document.getElementById('filterlab').style.display = 'block';
}

//-- Acceso a los deslizadores
const deslizadorRojo = document.getElementById('deslizadorRed');
const deslizadorVerde = document.getElementById('deslizadorGreen');
const deslizadorAzul = document.getElementById('deslizadorBlue');

 //-- Valores de los deslizadores
const range_valueR = document.getElementById('range_valueRed');
const range_valueG = document.getElementById('range_valueGreen');
const range_valueB = document.getElementById('range_valueBlue');

function colour() {
  ctx.drawImage(img, 0,0);
  //--Mostrar nuevos valores del deslizador
  range_valueRed.innerHTML = deslizadorRed.value;
  range_valueGreen.innerHTML = deslizadorGreen.value;
  range_valueBlue.innerHTML = deslizadorBlue.value;
  //--Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  //--Obtener el array con todos los píxeles
  let data = imgData.data;
  //--Obtener umbrales
  let umbralRed = deslizadorRed.value
  let umbralGreen = deslizadorGreen.value
  let umbralBlue = deslizadorBlue.value
  //--Umbrales
  for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbralRed){
        data[i] = umbralRed;
      }
      if (data[i+1] > umbralGreen){
        data[i+1] = umbralGreen;
      }
      if (data[i+2] > umbralBlue){
        data[i+2] = umbralBlue;
      }
  }
  //--Poner imagen en canvas
  ctx.putImageData(imgData, 0,0);
}

//Acceso a cambiar umbrales
const deslizadores = document.getElementById('deslizadores');
deslizadores.onclick = () => {
  document.getElementById('rangos').style.display = 'block';
  console.log("Deslizadores");
  ctx.drawImage(img, 0,0);
    deslizadorRed.oninput = () => {
       colour();
    }
    deslizadorGreen.oninput = () => {
       colour();
    }
    deslizadorBlue.oninput = () => {
       colour();
    }
}

//Foto en escala de grises
const grey = document.getElementById('grey');
grey.onclick= ()=>{
  document.getElementById('rangos').style.display = 'none';
  var bright = 0;
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  let data = imgData.data;
  for (let i = 0; i < data.length; i+=4) {
    bright = (3*data[i] + 4*data[i+1]+ data[i+2])/8
    data[i] = data[i+1] = data[i+2] = bright;
  }
  ctx.putImageData(imgData, 0,0);
}

// Espejo Horizontal
const horizontal= document.getElementById('horizontal');
horizontal.onclick = () => {
  document.getElementById('rangos').style.display = 'none';
  ctx.drawImage(img, 0,0);
  ctx.translate(2*(img.width)/2,0);
  ctx.scale(-1,1);
  ctx.drawImage(img, 0,0);
}

// Espejo vertical
const vertical= document.getElementById('vertical');
vertical.onclick = () => {
  document.getElementById('rangos').style.display = 'none';
  ctx.drawImage(img, 0,0);
  ctx.translate(0,2*(img.height)/2);
  ctx.scale(1,-1);
  ctx.drawImage(img, 0,0);

}

// Filtro negativo
//-- Botón negativo
const negativo= document.getElementById('negativo');
negativo.onclick = () =>{
  document.getElementById('rangos').style.display = 'none';
  ctx.drawImage(img, 0,0);
  //--Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  //--Obtener el array con todos los píxeles
  let data = imgData.data;
  for (let i = 0; i < data.length; i+=4) {
    //--Calcular RGB complementario
    red = 255 - data[i];
    green = 255 - data[i+1];
    blue = 255 - data[i+2];

    data[i] = red;
    data[i+1] = green;
    data[i+2] = blue;
  }
  //--Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0,0);
}

// Extra
const extra = document.getElementById('extra');
const imagem =document.getElementById('imagem');
  document.getElementById('extra').style.display = 'none';
  document.getElementById('imagem').style.display = 'none';
extra.onclick= ()=>{
  document.getElementById('rangos').style.display = 'none';
  document.getElementById('imagem').style.display = 'block';
  imagem.src="mari.png"

};

console.log("Fin...");
