function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");


for(let contador = 0; contador < listadeTeclas.length; contador++){
    const tecla = listadeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`; 
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
<<<<<<< HEAD
    tecla.onkeydown = function (evento) {
        console.log(evento.code =='Space')
        if (evento.code === 'Space'|| evento.code==='Enter'){
        tecla.classList.add('ativa'); }

   tecla.onkeydown = function (evento) {
        if (evento.code != 'Tab'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
tecla.onkeydown = function(){
    tecla.classList.add('ativa');
}

