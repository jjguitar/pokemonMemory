import APIController from '../utils/APIController.js'
import flipCards from '../utils/flipCards.js'
import Home from '../pages/Home.js'
import Header from '../templates/header.js'
import Footer from '../templates/footer.js'
import Pokeball from '../templates/pokeball.js'
import opacityImage from '../assets/img/pokeball.svg'

const router = async () => {
  let main
  let loading
  let header
  let buttonPlayAgain
  let footer
  let compareCards = []
  let counterPairs = 0
  let countersMovements = 0
  let pokemonId
  let block

  main = document.getElementById('cards-container')
  loading = document.getElementById('loading')
  header = document.getElementById('header')
  buttonPlayAgain = document.getElementById('button-play-again')
  footer = document.getElementById('footer')

  header.innerHTML = await Header()
  loading.innerHTML = await Pokeball()
  pokemonId = await APIController.getPokemonList()

  setTimeout(async () => {
    block = await Home(pokemonId)
    main.innerHTML = block
    main.style.backgroundImage = `url(${opacityImage}`
    loading.style.display = 'none'

    flipCards(compareCards, counterPairs, countersMovements)
    window.addEventListener('click', flipCards(compareCards, counterPairs, countersMovements))

  }, 200);

  buttonPlayAgain.onclick = () => {
    document.getElementById('movements').innerHTML = `${countersMovements}`
    main.innerHTML = ''
    loading.style.display = 'block'
    router()
  }

  footer.innerHTML = await Footer()

}

export default router