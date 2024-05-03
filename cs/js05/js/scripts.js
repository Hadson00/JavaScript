// cariaveis globais
var cont = 0;
var timer;

// funcoes
// atualiza o contador do cronometro
function atualiza(){
    cont++;
    var el = document.getElementById('contador');
    el.innerHTML = cont;
}

// inicializa e atualiza o contador
function ligaTimer(){
    timer = setInterval(atualiza, 1000);
    var bt_liga = document.getElementById('liga');
    bt_liga.disabled = true;
    var bt_desliga = document.getElementById('desliga');
    bt_desliga.disabled = false;
}

function desligaTimer(){
    clearInterval(timer);
    var bt_liga = document.getElementById('liga');
    bt_liga.disabled = false;
    var bt_desliga = document.getElementById('desliga');
    bt_desliga.disabled = true;
    cont = 0;
    var el = document.getElementById('contador');
    el.innerHTML = cont;
}

// Implementacao do semaforo
// funcao das lampadas
// funcao para atualizar o ciclo vermelho
function cicloVermelho(){
    acende(true, false, false);
    setTimeout(cicloVerde,2000);
    console.log('cicloVermelho');
}
// funcao para atualizar o ciclo amarelo
function cicloAmarelo(){
    acende(false, true, false);
    setTimeout(cicloVermelho,2000);
    console.log('cicloAmarelo');
}
// funcao para atualizar o ciclo verde
function cicloVerde(){
    acende(false,false,true);
    setTimeout(cicloAmarelo,2000);
    console.log('cicloVerde');
}

// coordena os estados das lampadas do semaforo
function acende(est_vermelho, est_amarelo, est_verde){
    var el_vermelho = document.getElementById('vermelho');
    var el_amarelo = document.getElementById('amarelo');
    var el_verde = document.getElementById('verde');

    el_vermelho.style.backgroundColor = est_vermelho?'red':'white';
    el_amarelo.style.backgroundColor = est_amarelo?'yellow':'white';
    el_verde.style.backgroundColor = est_verde?'green':'white';
}