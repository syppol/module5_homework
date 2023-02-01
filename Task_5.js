/* Задание 5.
Дан произвольный массив.
Необходимо вывести количество элементов массива,
затем перебрать его и вывести в консоль каждый элемент массива. */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr.length)

/* for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
} */

/* OR */

/* arr.forEach(function(item, index, array) {
    console.log(item);
}); */

/* OR */

arr.map(function(item, array) {
  console.log(item)
})
