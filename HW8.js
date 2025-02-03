//HW8. Задача 1.
//Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
/*
function capitalizeStrings(strings) {
  return strings.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
}

const strings = ['hello', 'WORLD', 'test', 'test1'];
const capitalizedStrings = capitalizeStrings(strings);

console.log(capitalizedStrings);



//Задача 2. Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [...set1].filter(element => set2.has(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);

console.log(commonElements);  
*/


// Задача 3. Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
//sum - сума всіх елементів масиву
//average - середнє значення елементів масиву
//min - мінімальне значення в масиві
//max - максимальне значення в масиві

function analyzeArray(arr) {
 
  if (arr.length === 0) {
    return {
      sum: 0,
      average: 0,
      min: null,
      max: null
    };
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  
  const average = sum / arr.length;

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    sum,
    average,
    min,
    max
  };
}

const numbers = [1, 2, 3, 4, 5];
const result = analyzeArray(numbers);

console.log(result);