function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas=document.querySelectorAll('.tecla');
let contador=0;
while(contador <listadeteclas.length) {
    const tecla=listadeteclas[contador];
const efeito= teclas[contador].classList[1];
const idAudio="#som_"+efeito;
tecla.onclick=function(){
    tocaSom(idAudio);
}
contador=contador +1 ;
//console.log(contador);
}


tecla.onkeydown= function(){
    tecla.add('ativa');
}