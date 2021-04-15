import getRandomInt from './getRandomInt.js'

const API = 'https://pokeapi.co/api/v2/pokemon'

const APIController = (() => {

  const _getPokemonList = async () => {
    let pokemonList = []
    for (let i = 0; i < 8; i++) {
      let id = getRandomInt(1, 151)
      try {
        const data = await _getPokemonId(id)
        console.log(data)
        pokemonList.push(data)
      } catch (err) {
        pokemonList.push(data)
      }
    }

    return pokemonList
  }

  const _getPokemonId = async (id) => {
      const apiURL = `${API}/${id}/`
      try {
        const response = await fetch(apiURL)
        const data = await response.json()
        // console.log(data)
        return data
      } catch (err) {
        console.log('Fetch Error', err)
      }
  }

return {
  getPokemonList() {
      return _getPokemonList();
    },
  getPokemonId(id) {
      return _getPokemonId(id);
    }
  }
})();

export default APIController;


