class Calculadora{
    sum(n1, n2){
        return n1 + n2;
    };

    subtraction(n1,n2){
        return n1 - n2;
    };

    multiplication(n1,n2){
        return n1 * n2;
    };

    division(n1,n2){
        if (n2 == 0){
            console.log('Divisão por 0');
        }
        return n1 / n2;
    };
}