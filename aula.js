const preco_gasolina = 6.40;
const preco_etanol = 4.80;
const kmPorLitro = 12;
let distancia = 356;
let tipoCombustivel = 'gasolina';

console.log("Bem vindo a calculadora de distancia ");



if (tipoCombustivel === 'gasolina') {

    let result = (distancia / kmPorLitro) * preco_gasolina;
    console.log('Resultado da gasolina: ' + result.toFixed(2));

}
else if (tipoCombustivel === 'etanol') {

    let result = (distancia / kmPorLitro) * preco_etanol;
    console.log('Resultado do etanol: ' + result.toFixed(2));
}