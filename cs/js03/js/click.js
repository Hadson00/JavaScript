// cria a variavel contador
var contador = 0;
// cria o objeto bt
var bt = document.getElementById('btCont');
var btl = document.getElementById('btLimpa');

bt.onclick=()=>{
    // incrementa o contador
    contador++;
    // cria o elemento el ref. ao span a ser atualizado
    var el = document.getElementById('cont');
    // atualiza o conteudo do span
    el.innerHTML = contador;
}

// limpa o contador
btl.onclick=()=>{
    // incrementa o contador
    contador--;
    // cria o elemento el ref. ao span a ser atualizado
    var el = document.getElementById('cont');
    // atualiza o conteudo do span
    el.innerHTML = contador;
}