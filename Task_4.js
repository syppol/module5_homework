/* Задание 4.
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
*/

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const x = getRandomIntInclusive(0, 100)

console.log(x)
