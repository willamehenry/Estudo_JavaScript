function convertpokemonTypesli (pokemonTypes){
return pokemonTypes.map((typeSlot)=> `<li class="type">${typeSlot.type.name}</li>`);

}

function convertPokemonLi(pokemon) {
    return `<li class="pokemon">
<span class="number">#${pokemon.order}</span>
<span class="nome">${pokemon.name}</span>

<div class="detail">
    <ol class="types">
        ${convertpokemonTypesli(pokemon.types).join('')}
    </ol>
    <img src="${pokemon.sprites.other.dream_world.front_default}" 
    alt="${pokemon.name}">

</div>
</li>`


}

const pokemonList = document.getElementById('pokemonList');



pokeApi.getPokemons().then((pokemonst = []) => {
    const newhtml =  pokemonst.map(convertPokemonLi).join('');
  
    pokemonList.innerHTML = newhtml;
    

})
        



