//Calculadora funcional Elena del Rio

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
var num=true;
//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

//-- Ha llegado un dígito
function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num;
    estado = ESTADO.OP1;
  }else if (estado == ESTADO.OP1){
    display.innerHTML += num;
  }else if (estado == ESTADO.OPERATION) {
    display.innerHTML += num;
    estado = ESTADO.OP2_INIT;
  }else if (estado == ESTADO.OP2_INIT) {
    display.innerHTML +=  num;
    estado = ESTADO.OP2;
  }else if (estado == ESTADO.OP2){
    display.innerHTML += num;
  }
}

  function operation(op){
  if (estado != ESTADO.OPERATION) {
    display.innerHTML += op;
    estado = ESTADO.OPERATION;

  }
}


for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev)=>{
    number(ev.target.value);


  }
}

let operator = document.getElementsByClassName("coperator");

for (i=0; i<operator.length; i++){
  operator[i].onclick = (ev)=>{
    operation( ev.target.value);
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
