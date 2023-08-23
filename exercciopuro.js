

/*class Pessoa {
    nome;
    idade;
    altura;
    anoDeNacimento;


    descrever() {
        console.log(`meu nome é: ${this.nome} minha idade e : ${this.idade} `);
    }

}

const willame =new Pessoa ();
willame.nome = 'willame';
willame.idade =25;
willame.descrever();*/

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }

    vericiaridade() {
        const veriidade = this.idade;
        if (veriidade > 20) {
            return 'ela é maior de iadade';

        } else {

            return 'ela não é maior de idade';
        }


    }

}
const willame = new Pessoa('willame', 19);
console.log(willame);

console.log(willame.vericiaridade());
