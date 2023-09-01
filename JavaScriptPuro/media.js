let nota1 = 10;
let nota2 = 10;

let result = (nota1 + nota2) / 2;

console.log('Sua media ficou: ' + result);

if (result >= 7) {
    console.log('Voçe foi aprovado com a media: ' + result);

}
else if (result <= 7 && result >= 4) {
    console.log(' Voçe esta de recuperação com a media: ' + result);

}
else if (result < 4) {

    console.log(' Voçe foi Reprovado com a media: ' + result);
}

