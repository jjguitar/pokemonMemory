import APIController from '../utils/APIController.js'

const router = async () => {
  const main = document.getElementById('cards-container')
  // const pokemon = await APIController.getPokemonList()
  let pokemonId = await APIController.getPokemonList()
  pokemonId = [...pokemonId, ...pokemonId]
  // console.log(pokemonId2)
  pokemonId = pokemonId.sort((a, b) => 0.5 - Math.random());
  let block = pokemonId.map((pokemon) =>
    `
    <div class="flip-box" id="${pokemon.id}">
      <div class="flip-box-inner">
        <div class="flip-box-back">
          <img src="${pokemon.sprites.front_default}" alt="Paris">
          <p>${pokemon.name}</p>
        </div>
        <div class="flip-box-front">
          <p>Who is this Pokemon?</p>
        </div>
      </div>
    </div>
    `
  ).join('')

  main.innerHTML = block
  let elementsFlip = document.getElementsByClassName('flip-box');
  let box1 = []
  function change()  {
    // console.log('click')
    for(let i of elementsFlip) {
      // console.log(i.className.includes('flipar'))
      if (i.className.includes('flipar')) {
        i.onclick = () => i.classList.remove('flipar');
      } else {
        i.onclick = () => {
          i.classList.add('flipar')
          console.log(i.id)
          box1.push(parseInt(i.id))
          console.log(box1)
        }
      }
    }
  }
  change()
  document.getElementById('main').addEventListener('click', change)
  const button = document.getElementById('button-random');

  button.onclick = () => router()

}

export default router