import getRandomInt from './getRandomInt.js'

const getRandomArray = () => {
  let array = []
  let number = 0;
  let ids = []
  while (ids.length < 8) {
    number = getRandomInt(1,100)
    array.push(number)
    ids = array.filter((valor, index) => {
      return array.indexOf(valor) === index;
    })
  }

  return ids
}

export default getRandomArray
