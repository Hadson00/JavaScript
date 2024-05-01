// 01 - funcao que insere item no final
function insereItemFinal(){
    //cria novo objeto item a ser inserido
    var novo = document.createElement('li');
    // cria objeto com itens da lista
    var els = document.getElementsByTagName('ul');
    // cria novo item apos o elemeto[0]
    els[0].appendChild(novo);
    // insere conteudo no novo elemento
    novo.innerHTML = 'Binômio de Newton';
}

// 02 - funcao insere item antes de...
function insereItemBefore(){
    //cria novo objeto - item a ser incluido
    var item = document.createElement('li');
    // insere conteudo no Item
    item.innerHTML = 'Binômio de Newton';
    // cria objeto com itens da lista
    var lista = document.getElementById('mat');
    // insere o item antes da posicao definida
    lista.insertBefore(item, lista.childNodes[2]);
}

// 03 - substitui item especificado
function substituiItem(){
    // cria objeto com os itens da lista
    var els = document.getElementsByTagName('li');
    // define o numero de itens
    var tamanho = els.length - 1;
    // define a posicao para substituicao
    var pos = prompt('Informe a posição do item a ser substituído [0 a ' + tamanho + ']');
    // substitui o conteudo do elemento escolhido
    els[pos].innerHTML = prompt('Informe a matéria');
}

// 04 - exclui item especificado
function excluiItem(){
    // cria objeto com lista de Matematica
    var lista = document.getElementById('mat');
    // cria objeto com itens da  lista
    var els = document.getElementsByTagName('li');
    // remove o primeiro elemento da lista
    lista.removeChild(els[0]);
}

// 05 - exclui item na lista de Portugues
function excluiPortugues(){
    // cria objeto com lista de Portugues
    var listap = document.getElementById('port');
    // cria objeto com itens da Lista
    var elsp = listap.getElementsByTagName('li');
    // remove o primeiro elemento da lista
    listap.removeChild(elsp[0]);
}

// 06 - exclui item na lista de Geografia

function excluiGeografia(){
    // cria objeto com lista de Geografia
    var listag = document.getElementById('geo');
    // cria objeto com itens da Lista
    var elsg = listag.getElementsByTagName('li');
    // remove o primeiro elemento da lista
    listag.removeChild(elsg[0]);
}

// 07 - insere imagem na pagina
function insereImagem(){
    // cria o objeto imagem
    var img = document.createElement('img');
    // isere o caminho do arquivo na imagem no objeto imagem
    img.src = './img/rio.jpg';
    // inserir o objeto img (elemento filho) na div Imagem (elemento pai)
    imagem.appendChild(img, img);
}