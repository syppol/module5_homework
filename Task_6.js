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
