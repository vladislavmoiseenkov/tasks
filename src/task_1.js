/*
* Вивести всі високосні роки в діапазоні років.
* Початковий і кінцевий рік діапазона питати у користувача двома запитами
* за допомогою prompt(). Якщо користувач вводить некоректний рік (порожній, не число)
* використовувати замість нього поточний рік.
*/

let start = +prompt('Початковий рік', '');
let end = +prompt('Кінцевий рік', '');

if (!start && !Number.isInteger(start)) {
  start = new Date().getFullYear() - 2;
}

if ((!end && !Number.isInteger(end)) || end < start) {
  end = new Date().getFullYear();
}

const years = [];

for (let i = start; i < end; i++) {
  if ((i % 4 === 0 && i % 1000 !== 0) || i % 400 === 0) {
    years.push(i);
  }
}

export default {
  years
};
