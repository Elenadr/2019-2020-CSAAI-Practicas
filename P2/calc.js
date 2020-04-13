//Calculadora funcional

console.log("Launching Javascript... ");

const gui ={
  display:document.getElementById("display"),
  delet:document.getElementById("delete"),
  clear:document.getElementById("clear"),
  exp:document.getElementById("exp"),
  ans:document.getElementById("ans"),
  equal:document.getElementById("equal"),
  dot:document.getElementById("dot")
}

let digitos = document.getElementsByClassName("cdigito");
//--Estados calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}

function operation(operator)
{
  if (ESTADO.OP1 == operator){
    estado = ESTADO.OPERAION;
    console.log('OP1');
  }
  if (estado == ESTADO.OPERATION){
    display.innerHTML=operator;
    estado=ESTADO.OP2;
    console.log('OPERATION');
  }
}

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
//-- Borrar último digito
delet.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
}
//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
    console.log("clear");
}
