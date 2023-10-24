function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas=document.querySelectorAll('.tecla');
let contador=0;
while(contador <listadeteclas.length) {
const efeito= listadeteclas[contador].classList[1];
const idAudio="#som_"+efeito;
listadeteclas[contador].onclick=function(){
    tocaSom(idAudio);
}
contador=contador +1 ;
console.log(contador);
}