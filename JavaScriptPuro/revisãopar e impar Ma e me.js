const listnumeros
    = [3, 6, 2, 40, 380, 203, 10, 25, 76];

let numeromaior = null;
let numeromenor = null;

for (let i = 0; i < listnumeros.length; i++) {
    const contagem = listnumeros[i];


    if (contagem % 2 == 0) {
        if (numeromaior ===null ||contagem >numeromaior) {
            numeromaior = contagem;
       
            } 

        console.log('esse numero é par: ' + contagem);
       
    } else {
        if (numeromenor === null || contagem < numeromenor){
            numeromenor = contagem;
        } 
    

        console.log('Esse numero é impar: ' + contagem);
    }
        


}

console.log('___________________________________________');
console.log('esse numero é o maior de par: ' + numeromaior);
console.log('___________________________________________');
console.log('ESSE NUMERO É MENOR DE IMPAR: ' + numeromenor);