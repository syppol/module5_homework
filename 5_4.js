/* Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

const str = 'I love Javascript'

function reverseStr (st, int) {
  process.stdout.write(st.charAt(int))
  if (int === 0) {
    return
  }
  reverseStr(st, int - 1)
}

reverseStr(str, str.length)
console.log()

/* OR */

/* function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello"); */

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
