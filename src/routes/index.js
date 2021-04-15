import APIController from '../utils/APIController.js'

const router = async () => {
  const main = document.getElementById('main')
  // const pokemon = await APIController.getPokemonList()
  const pokemonId = await APIController.getPokemonList()
  console.log(pokemonId)
  let block = pokemonId.map((pokemon) =>
    `
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <img src="${pokemon.sprites.front_default}" alt="Paris">
        </div>
        <div class="flip-box-back">
          <h2>Paris</h2>
          <p>${pokemon.name}</p>
        </div>
      </div>
    </div>
    `
  ).join('')

  main.innerHTML = block
}

export default router