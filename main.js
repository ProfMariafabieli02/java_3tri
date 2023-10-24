function tocaSomaplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}
const listadeteclas=document.querySelectorAll('.tecla');
let contador=0;
while(contador <8) {

listadeteclas[contador].onclick=tomSomAplausos;
contador=contador +1 ;
console.log(contador);
}