function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas=document.querySelectorAll('.tecla');
let contador=0;
while(contador <listadeteclas.length) {

listadeteclas[contador].onclick=function(){
    tocaSom('som_tecla_aplausos');
}
contador=contador +1 ;
console.log(contador);
}