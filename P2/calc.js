console.log("Launching Javascript... ");

const hola = document.getElementById('hola')
hola.onclick = () =>{
  console.log("Click!!");
  if (  hola.style.backgroundColor==''){
    hola.style.backgroundColor="lightpink";
  }else{
    hola.style.backgroundColor='';
  }
  console.log(3);
}
