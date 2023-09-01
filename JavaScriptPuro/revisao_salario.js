const { gets, print } = require('./funcoes-aux1');

const valorsalario = gets();
const beneficios = gets();

function calculadora(valor, porcentagem) {

    return valor * (porcentagem / 100);

}

function percentualsalario(salario) {

    if (salario >= 0 && salario <= 1100) {
        return 5;

    } else if (salario >= 1100.01 && salario <= 2500) {

        return 10;

    } else {

        return 15;
    }

}
const alicota = percentualsalario(valorsalario);
const valorimporto = calculadora(valorsalario, alicota);

const valortranferir = valorsalario - valorimporto + beneficios;



print(valortranferir);
