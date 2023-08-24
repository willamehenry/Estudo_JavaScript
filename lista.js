

const nota = [];

nota.push(10);
nota.push(10);
nota.push(6);




let soma = 0;

for (let i = 0; i < nota.length; i++) {
    const n1 = nota[i];
    soma = soma + n1;


}
const media = soma / nota.length;

console.log(soma);

console.log (media.toFixed(2));
