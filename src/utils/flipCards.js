let winnerText = document.getElementById('movements')
function cardsValidation(box1) {
  if (box1[0] === box1[1]) {
    return true
  } else {
    return false
  }
}

const deleteClass = (deletes) => {
  let bozi1 = deletes[0]
  // console.log(bozi1 === undefined)
  bozi1 === undefined ? '' : bozi1.classList.remove('compare')
  bozi1 === undefined ? '' : bozi1.classList.remove('flipar')
  let bozi2 = deletes[0]
  // console.log(bozi2)
  bozi2 === undefined ? '' : bozi2.classList.remove('compare')
  bozi2 === undefined ? '' : bozi2.classList.remove('flipar')
}

const flipCards = (compareCards, counterPairs, countersMovements) => {
  let elementsFlip = document.getElementsByClassName('flip-box');
  for(let i of elementsFlip) {
    i.onclick = () => {
      if (!(i.className.includes('compare')) && compareCards.length < 2) {
        ++countersMovements;
        winnerText.innerHTML = `${countersMovements}`
        i.classList.add('flipar')
        i.classList.add('compare')
        compareCards.push(parseInt(i.getAttribute('value')))
      }

      if ((compareCards.length === 2) && cardsValidation(compareCards)) {
          ++counterPairs;
          let deletes = document.getElementsByClassName('compare')
          setTimeout(() => {
            for (let j of deletes) {
              let flipCard = j.childNodes
              flipCard = flipCard[1]
              flipCard.style.display = 'none'
            }
            deleteClass(deletes)
            compareCards = []
          }, 600);
        } else if (compareCards.length === 2){
          let deletes = document.getElementsByClassName('compare')
          setTimeout(() => {
            deleteClass(deletes)
            compareCards = []
          }, 600);
        }
      }

  }
  //movements

}

export default flipCards
