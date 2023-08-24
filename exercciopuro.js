class Pessoa {
    nome;
    altura;
    idade;
    peso;



    constructor(nome, altura, idade, peso) {
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
        this.peso = peso;
    }

    verificarpeso() {
        const veripeso = this.peso;
        if (veripeso <= 20) {
            console.log('vc tem um peso muito leve ');
        } else {
            console.log('vc tem um peso acima de 20 kilo');
        }

    }

}




const p1 = new Pessoa('wllame', 1.69, 26, 21);

p1.verificarpeso();

