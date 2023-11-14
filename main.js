function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listadeteclas.length; contador++) {
    const tecla = listadeteclas[contador];
    const efeito = tecla[contador].classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
    tocaSom(idAudio);
}
tecla.onkeydown = function(){
    tecla.classList.add('ativa');
}}
