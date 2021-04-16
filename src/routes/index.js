import APIController from '../utils/APIController.js'
import flipCards from '../utils/flipCards.js'
import Home from '../pages/Home.js'

const router = async () => {
  const main = document.getElementById('cards-container')
  let pokemonId = await APIController.getPokemonList()
  let block = await Home(pokemonId)

  main.innerHTML = block

  let compareCards = []
  let counterPairs = 0
  let countersMovements = 0

  flipCards(compareCards, counterPairs, countersMovements)
  document.getElementById('main').addEventListener('click', flipCards(compareCards, counterPairs, countersMovements))

  if (counterPairs > 8) {
    setTimeout(() => {
    alert(`countersMovements${countersMovements}box${counterPairs}`)
    countersMovements = 0
    counterPairs = 0
  }, 600);
  }
  const button = document.getElementById('button-random');

  button.onclick = () => {
    document.getElementById('movements').innerHTML = `${countersMovements}`
    document.getElementById('pairs').innerHTML = `${counterPairs}`
    router()
  }

}

export default router