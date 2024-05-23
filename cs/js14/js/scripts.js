function somar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) + parseInt(num2);
    teste(num1, num2, result);
}

function subtrair(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) - parseInt(num2);
    teste(num1, num2, result);
}

function multiplicar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) * parseInt(num2);
    teste(num1, num2, result);
}

function dividir(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) / parseInt(num2);
    teste(num1, num2, result);
}

function limpar(){
    var limpar = null;
    var num1 = null;
    var num2 = null;
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
    document.getElementById('resultado').innerHTML = limpar;
}

function teste(num1, num2, result){
    if(isNaN(num1) || num1 == ''){
        alert('Valor invalido para o numero 1')
        document.getElementById('num1').select();
    }
    else if (isNaN(num2) || num2 == ''){
        alert('Valor invalido para o numero 2')
        document.getElementById('num2').select();
    }
    else{
        document.getElementById('resultado').innerHTML = result;
    }
}