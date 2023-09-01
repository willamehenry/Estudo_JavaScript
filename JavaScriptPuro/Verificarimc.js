



function verificacaoImc(peso, altura) {
    let imc = peso / Math.pow(altura, 2);
    return imc >= 18.5 && imc <= 25;
    
   


}

console.log(verificacaoImc(10, 20));