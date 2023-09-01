class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
}

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} E maior que  ${p2.nome}`);

    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome}; E maior que ${p1.nome};`);
    }
    else {

        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);

    }


}

const willame = new Pessoa('willame', 24);
const Lucas = new Pessoa('Lucas ', 24);

compararPessoa(willame, Lucas); 
