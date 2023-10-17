const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0
let pokenumber

const maxRecords = 151

function loadPokemonItens(offset, limit){
       
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                       ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                   
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    
                </div>
        </li>
    `
    ).join('')
        
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtRecordNextPage  = offset + limit
    if(qtRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit) 
        loadMoreButton.parentElement.removeChild(loadMoreButton)
         
    }
    else{
        loadPokemonItens(offset, limit)
    }
 
})

function loadPokeData(pokeNumber){
    //Em PokeAPI chamar a API que tras os dados detalhados do pokemon.
    //e aqui retorna a página com os dados detalhados
    //Para pegar o número do pokemon da para pegar getElementByid

}
 
/* 
    for(let i = 0; i <pokemons.length; i++){
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)                  
            listItens.push(convertPokemonToLi(pokemon))
        }
    })
    .catch((error)=> console.log(error)) */


