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