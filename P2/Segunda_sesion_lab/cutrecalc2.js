//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const gui ={
  display:document.getElementById("display"),
  suma:document.getElementById("suma"),
  igual:document.getElementById("igual"),
  clear:document.getElementById("clear"),
  resta:document.getElementById("resta"),
}
let digitos = document.getElementsByClassName("cdigito");

for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev)=>{
    digito(ev.target);
  }
}

function digito(boton){
  if(display.innerHTML=="0"){
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
  }
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += suma.value;
    console.log("click en el +");
}
resta.onclick = () => {
  display.innerHTML += resta.value;
    console.log("click en el -");
}
//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
    console.log("click en el =");
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
    console.log("clear");
}
