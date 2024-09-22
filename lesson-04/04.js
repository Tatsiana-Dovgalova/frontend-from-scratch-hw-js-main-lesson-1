/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {

  const arr1 = str.split('');
  const arr2 =[];

  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i], arr1[i])
  }

  let result = arr2.join('');
  return result
}

console.log(doubleEachCharacter('hello'));
