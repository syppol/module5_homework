/* Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки. */

const myMap = new Map()

myMap.set('first', 1)
myMap.set('second', 2)
myMap.set('third', 3)
myMap.set('fourth', 4)

for (const key of myMap.keys()) {
  console.log(`Ключ — ${key}, значение — ${myMap.get(key)}`)
}
