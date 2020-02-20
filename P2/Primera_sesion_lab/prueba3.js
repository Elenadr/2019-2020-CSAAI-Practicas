console.log("EjectutandoJavasscript...");

const test = document.getElementById('test')
test.onclick = () =>{
  console.log("Click!!");
  if (  test.style.backgroundColor==''){
    test.style.backgroundColor="lightpink";
  }else{
    test.style.backgroundColor='';
  }
}
