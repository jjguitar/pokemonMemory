import APIController from '../utils/APIController.js'
import flipCards from '../utils/flipCards.js'
import Home from '../pages/Home.js'
import Header from '../templates/header.js'
import pokeball from '../assets/img/pokeball.svg'
import normalBall from '../assets/img/normalBall.svg'

const router = async () => {
  let main
  let loading
  let header
  let button
  let compareCards = []
  let counterPairs = 0
  let countersMovements = 0
  let pokemonId
  let block

  main = document.getElementById('cards-container')
  loading = document.getElementById('loading')
  header = document.getElementById('header')
  header.innerHTML = await Header()
  loading.innerHTML = `
    <img src="${normalBall}" width="80" height="80">
    <p>Loading...</p>
  `
  button = document.getElementById('button-random')
  pokemonId = await APIController.getPokemonList()
  setTimeout(async () => {
    block = await Home(pokemonId)
  

  main.innerHTML = block
  main.style.backgroundImage = `url(${pokeball}`
  loading.style.display = 'none'

  flipCards(compareCards, counterPairs, countersMovements)
  document.getElementById('main').addEventListener('click', flipCards(compareCards, counterPairs, countersMovements))

  button.onclick = () => {
    document.getElementById('movements').innerHTML = `${countersMovements}`
    document.getElementById('pairs').innerHTML = `${counterPairs}`
    router()
  }
}, 1000);

}

export default router