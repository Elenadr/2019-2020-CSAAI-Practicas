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
  OP2: 3,
}

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
    estado = ESTADO.OP2;
  }else if (estado == ESTADO.OP2){
    display.innerHTML += num;
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
    if(estado == ESTADO.OP1){
           display.innerHTML += ev.target.value;
           estado = ESTADO.OPERATION;
         }
      }
}

//-- Evaluar la expresion
equal.onclick = () => {
 if(estado == ESTADO.OP1 ||  estado == ESTADO.OP2){
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
  }
}

//-- Borrar último digito
delet.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
    console.log("clear");
    estado = ESTADO.INIT;
}
