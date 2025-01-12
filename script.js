const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalId;

const semaforo = ( event ) =>{
    pararAutomatico();
    ligar[event.target.id]();
}

const proximoIndex = () =>{
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
    
}

const trocaDeCor = () =>{
    const colors = ['vermelho','amarelo','verde']
    const color = colors[ colorIndex ];
    ligar[color]();
    proximoIndex();
}

const pararAutomatico = () =>{
    clearInterval( intervalId );
}

const ligar = {
    'vermelho': () => img.src = './img/semaforoVermelho.png',
    'amarelo': () => img.src = './img/semaforoAmarelo.png',
    'verde': () => img.src = './img/semaforoVerde.png',
    'automatico': () => intervalId =  setInterval(trocaDeCor, 1000)
}

buttons.addEventListener('click', semaforo)