//Calculadora funcional

console.log("Launching Javascript... ");

const gui ={
  display:document.getElementById("display"),
  delete:document.getElementById("delete"),
  clear:document.getElementById("clear"),
  exp:document.getElementById("exp"),
  ans:document.getElementById("ans"),
  equal:document.getElementById("equal"),
  dot:document.getElementById("dot")
}

let digitos = document.getElementsByClassName("cdigito");

for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev)=>{
    digito(ev.target);
  }
}

let operator = document.getElementsByClassName("coperator");

for (i=0; i<operator.length; i++){
  operator[i].onclick = (ev)=>{
    display.innerHTML += ev.target.value;
  }
}
function digito(boton){
  if(display.innerHTML=="0"){
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
  }
}

//-- Evaluar la expresion
equal.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
    console.log("click en el =");
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
    console.log("clear");
}
