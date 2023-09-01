
/*const pessoa = {

    nome: 'willame',
    idade: 25,
    descrever: function () {
        console.log(`meu nome é: ${this.nome} minha idade e : ${this.idade} `);

    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);




pessoa.descrever(); */

class Pessoa {
    nome;
    idade;
    altura;
    anoDeNacimento;


    descrever() {
        console.log(`meu nome é: ${this.nome} minha idade e : ${this.idade} eu tenho de altura: ${this.altura} eu nascer no ano de: ${this.anoDeNacimento = 2023 - this.idade}`);
    }

}

const carlos = new Pessoa();
carlos.nome = 'joao';
carlos.idade = 30;
carlos.altura = 1.80;


const mario = new Pessoa();

mario.nome = 'mario bros'
mario.idade = 45;
mario.altura = 1.45;


const willame = new Pessoa();
willame.nome = 'willame';
willame.idade = 26;
willame.altura = 1.69;

willame.descrever();
carlos.descrever();
mario.descrever();
