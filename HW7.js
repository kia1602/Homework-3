//HW7. Задача 1.
//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
/*function reverseArray(arr) {
  return arr.slice().reverse();  
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray);


//Задача 2.Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).

function uniqueValues(arr1, arr2) {
  
  return [...new Set([...arr1, ...arr2])];
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const uniqueArray = uniqueValues(array1, array2);

console.log(uniqueArray); 
*/

//Задача 3. Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) 
// і повертає середній бал усіх студентів.

const students = [
  { name: 'Олександр', age: 21, averageGrade: 78 },
  { name: 'Ольга', age: 22, averageGrade: 95 },
  { name: 'Іван', age: 21, averageGrade: 75 },
];

function calculateAverageGrade(students) {

  if (students.length === 0) {
    return 0; 
  }

  
  const totalGrade = students.reduce((sum, student) => sum + student.averageGrade, 0);

  
  return totalGrade / students.length;
}

const averageGrade = calculateAverageGrade(students);

console.log(averageGrade);  