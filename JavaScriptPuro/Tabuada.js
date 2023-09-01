const nuescolhido = 5;

function teste(){

    for (let i = 1; i <= 10; i++) {

        let numero = i;
        console.log(` ${nuescolhido} x ${numero} = ${nuescolhido * numero}`);
    }
}

module.exports = {teste};
