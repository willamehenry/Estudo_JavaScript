class carro {
    marca;
    cor;
    gastomediokm;

    constructor(marca, cor, gastomediokm) {
        this.marca = marca;
        this.cor = cor;
        this.gastomediokm = gastomediokm;

    }
    calculargasto(distancia, precoconbustivel) {
        return  distancia * this.gastomediokm *precoconbustivel;
    }

}

const Gol = new carro('gol', 'vermelhor', 1 / 12);

console.log (Gol.calculargasto(150,5));


