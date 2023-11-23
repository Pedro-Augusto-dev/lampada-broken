var lamp = window.document.getElementById(`Lampada`)
var reset = document.getElementById('reset')

function estaQuebrada() {
    return lamp.src.indexOf(`quebrada`) > -1
}

function ligar(){
    if (!estaQuebrada()){
    lamp.src = `acessa.svg`}
}
function desliga(){
    if(!estaQuebrada()){
    lamp.src = `apagada.svg`}
}
function quebrada(){
    lamp.src = `quebrada.svg`
}

function restart(){
    
        lamp.src = `apagada.svg`
        reset.style.display = 'none'
}

lamp.addEventListener(`click`,quebrada)
function quebrada(){
    lamp.src = `quebrada.svg`;
    reset.style.display = 'flex';
}
reset.addEventListener('click', reset)


