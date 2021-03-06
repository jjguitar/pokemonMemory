const Home = (pokemonList) => {
  let numberOfCard = 0
  let block = pokemonList.map((pokemon) =>
    `
    <div class="flip-box max-dimension" value="${pokemon.id}">
      <div class="flip-box-inner max-dimension">
        <div class="flip-box-back max-dimension">
          <img src="${pokemon.sprites.front_default}" alt="Paris" width="80" height="80">
          <p>${pokemon.name}</p>
        </div>
        <div class="flip-box-front max-dimension">
          <div class="box-main">
            <div class="box1 shadow-top">
              <div class="curve-l1"></div>
              <div class="curve-l1-little top"></div>
              <div class="curve-l1 curve-r1 right top"></div>
              <div class="curve-l1-little curve-r1-little right top"></div>
            </div>
            <div class="circle-big shadow-circle"></div>
            <div class="center">
              <div class="circle">${++numberOfCard}</div>
            </div>
            <div class="box2 shadow-bottom">
              <div class="curve-l1 bottom"></div>
              <div class="curve-l1-little bottom"></div>
              <div class="curve-l1 curve-r1 right bottom rotate-bottom"></div>
              <div class="curve-l1-little curve-r1-little right bottom rotate-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  ).join('')

  return block
}

export default Home
