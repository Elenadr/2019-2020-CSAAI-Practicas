//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const gui ={
  display:document.getElementById("display"),
  boton1: document.getElementById("boton1"),
  boton2: document.getElementById("boton2")
}

//-- Contador de clicks
const counter = {
  valor: 0,
  inc : function(value) {
    this.valor += value;
    gui.display.innerHTML = this.valor;
  }
}


//Incremento automatico contador cada 1 sg
//1000ms
setInterval(()=>{
  console.log("tic-tac");
  counter.inc(1);
},1000);
//suma
gui.boton1.onclick = () => {
  console.log("Click!");
  counter.inc(1);
}
  //resta
  gui.boton2.onclick = () => {
    console.log("Click!");
    counter.inc(-1);
  }
