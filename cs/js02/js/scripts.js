function mostrarParagrafo(){
    document.getElementById('p1').style.visibility = 'visible';
}

function alterarConteudo(){
    document.getElementsByTagName("p")[2].innerHTML = 'Texto Modificado por JS!';
}

function alterarBotao(){
    var x = document.getElementsByName('btRed');
    alert('Existem(m) ' + x.length + ' elemento(s) <btRed> nesta página.');
    document.getElementsByName('btRed')[0].style.backgroundColor = 'red';
}

function alterarCor(){
    var y = document.getElementsByClassName('divAltera');
    var i;
    for(i = 0; i < y.length; i++){
        y[i].style.backgroundColor = '#837744'
    }
}