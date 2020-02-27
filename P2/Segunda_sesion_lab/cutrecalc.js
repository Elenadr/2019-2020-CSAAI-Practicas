//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const gui ={
  display:document.getElementById("display"),
  boton1: document.getElementById("boton1"),
  boton2: document.getElementById("boton2"),
  suma:document.getElementById("suma"),
  igual:document.getElementById("igual"),
  clear:document.getElementById("clear"),
}

// -- Insertar digito 1
boton1.onclick = () => {
  display.innerHTML += "1";
  console.log("click en el 1");
}

//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += "2";
    console.log("click en el 2");
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
    console.log("click en el +");
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
