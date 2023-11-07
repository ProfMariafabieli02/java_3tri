function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas=document.querySelectorAll('.tecla');

for(let contador=0;contador <listadeteclas.length; contador++) {
    const tecla=listadeteclas[contador];
    const efeito= teclas[contador].classList[1];
    const idAudio= `#som_${efeito} `;
    tecla.onclick=function(){
    tocaSom(idAudio);
}
contador=contador +1 ;
//console.log(contador);
}


tecla.onkeydown= function(){
    tecla.add('ativa');
}