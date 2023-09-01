const listadenumeros = [10, 3,  20, 50, 67, 25, 7, 9];
let NumeroMaiorPar = null;
let NumeroMenorImpar = null;

for (let i = 0; i < listadenumeros.length; i++) {
    const contador = listadenumeros[i];

    if (contador % 2 == 0) {

        console.log('Esse numero e PAR :' + contador);

        if (NumeroMaiorPar === null || contador > NumeroMaiorPar) {
            NumeroMaiorPar = contador;

        }

    } else {

        if (NumeroMenorImpar ===null || contador < NumeroMenorImpar){

            NumeroMenorImpar = contador;
        }
        console.log('Esse numero é IMPAR: ' + contador)

    }

}
console.log('_____________________________________');
console.log(` Numero maior de PAr é : ` + NumeroMaiorPar);
console.log('________________________________________');
console.log('Numero menor de Impar é: '+NumeroMenorImpar);