class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
    calcularimc() {
        return this.peso / (Math.pow(this.altura, 2));

    }

    classificarimc() {
        const imc = this.calcularimc();

        if (imc < 18.5) {

            return ('Abaixo do peso');
        }
        else if (imc >= 18.5 && imc <= 25) {
            return ('Peso normal');
        }
        else if (imc >= 25 && imc <= 30) {
            return ('Acima do peso');
        }
        else if (imc >= 30 && imc <= 40) {
            return ('obeso');
        } else {
            return ('Obersidade grave');
        }

    }

}


const Pedro = new Pessoa('pedro', 80, 1.69);

const rennan = new Pessoa('Rennan', 30, 1.73);

const willame = new Pessoa('willame', 71, 1.69);


console.log(willame.classificarimc());
console.log(Pedro.classificarimc());

console.log(rennan.classificarimc());

