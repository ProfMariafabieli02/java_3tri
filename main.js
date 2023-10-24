function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas=document.querySelectorAll('.tecla');
let contador=0;
while(contador <listadeteclas.length) {

listadeteclas[contador].onclick=tomSomAplausos;
contador=contador +1 ;
console.log(contador);
}