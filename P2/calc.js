//Calculadora funcional

console.log("Launching Javascript... ");

const gui ={
  display:document.getElementById("display"),
  delete:document.getElementById("delete"),
  clear:document.getElementById("clear"),
  multiplication:document.getElementById("multiplication"),
  division:document.getElementById("division"),
  sum:document.getElementById("sum"),
  subtraction:document.getElementById("subtraction"),
  dot:document.getElementById("dot"),
  exp:document.getElementById("exp"),
  ans:document.getElementById("ans"),
  equal:document.getElementById("equal"),
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
sum.onclick = () => {
  display.innerHTML += sum.value;
    console.log("click en el +");
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
