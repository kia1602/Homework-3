//Задача 6.
//Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, 
// у якому кожен символ повторюється двічі hello ⇒ hheelllloo
  /* 
const N = prompt('Введіть данні: ');  

function doubleLetter(str){
    let doubledStr = '';
    for (let i = 0; i < str.length; i++) {
        doubledStr += str[i] + str[i]; 
      }
      return doubledStr;

    }
let result = doubleLetter(N);
 console.log (result);


//Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, 
// що є довгим рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, 
// четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням). Якщо 2 параметр менше, ніж довжина вихідного рядка, 
//то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.

function padString(str, length, symbol = ' ', toLeft = false) {
    if (str.length >= length) {
      return str;
    }
  
    const paddingLength = length - str.length;
  
    const padding = symbol.repeat(paddingLength); 
    if (toLeft) {
      return padding + str;
    } else {
      return str + padding;
    }
  }
  
  
  console.log(padString('Ivan', 6, '*')); 
  */


  //Задача 3.
  // Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.
const N = prompt('Введіть данні: ');  

  function camelCase(str, separator) {

    const words = str.split(separator);
  
    const camelCased = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();  
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  
    });
  
    return camelCased.join('');
  }
  let a = camelCase(N, ' ');

console.log(a);

