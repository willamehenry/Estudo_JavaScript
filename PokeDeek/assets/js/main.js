const offset = 0;
const limit = 10;


const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch (url).then (function(responde){
console.log(responde);

})

const x =10 +10;
const y =20 + 20;
const soma = (x*y)/2;


console.log (soma);