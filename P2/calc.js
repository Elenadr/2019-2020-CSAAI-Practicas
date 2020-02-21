console.log("Launching Javascript... ");

const hola = document.getElementById('hola')
boton1.onclick = () =>{
  console.log("Click!!");
  if (  boton1.style.backgroundColor==''){
    boton1.style.backgroundColor="lightpink";
  }else{
    boton1.style.backgroundColor='';
  }
  console.log(3);
}
