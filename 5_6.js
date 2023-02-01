/* Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/

let arr = [1, 3, 5, 7, 5]
// let arr = [3, 3, 3, 3];
// let arr = ['a', 'a'];
// let arr = [false, false, false, false];
// let arr = ['test', 'test', 100, 100, true];
// let arr = [];
// let arr = [1];

let x = 1;

if (arr.length <= 1) {
    console.log("Please use array with 2 elements or more");
    return;
}

for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] === arr[index+1]) {
        x = x + 1;
    }
}

let equal = (x === arr.length) ? true : false;
console.log(`Are all elements in the array equal? Answer: ${equal}`);

/* Задание 7.
Дан массив.
Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

const arrTask7 = [1, 2, NaN, 4, 5, null, 8, 0, 13, true, 43, 0, '=', 'hello', false, 11.11, 19.5, -9, -10]
// let arrTask7 = [1, 1, 3, 5];
// let arrTask7 = [2, 8, 8, 10];
// let arrTask7 = [0, 0];
// const arrTask7 = ['yes', 'no', 'maybe']
// let arrTask7 = [1];
// let arrTask7 = [90];
// let arrTask7 = [];

let countOdd = 0
let countEven = 0
let countNull = 0

arrTask7.forEach(element => {
  if ((Math.abs(element) % 2 === 1) && (typeof element === 'number')) {
    countOdd++
  } else if ((Math.abs(element) % 2 === 0) && (element !== 0) && (typeof element === 'number')) {
    countEven++
  } else if (((element === null) || (element === 0)) && !isNaN(element)) {
    countNull++
  }
})

console.log(`Odd numbers: ${countOdd}`)
console.log(`Even numbers: ${countEven}`)
console.log(`Amount of nulls: ${countNull}`)
