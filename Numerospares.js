
const numeroslist = [20, 30, 50, 43, 69, 45, 100];
let numeromaior = 0;
for (let i = 0; i <= numeroslist.length; i++) {
    const contagem = numeroslist[i]

    if (contagem % 2 == 0) {

        console.log('Numero par: ' + contagem);

        if (contagem > numeromaior) {

            numeromaior = contagem;
        }
    }
    else {

        console.log('Numero impar: ' + contagem);

    }


}

console.log ('esse é o numeior maior de par: '+numeromaior);
