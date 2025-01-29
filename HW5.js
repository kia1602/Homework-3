    //ДЗ 5.1. Задача 1.
//Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.
/*
const N = prompt('Введіть данні: ');  
function reverseString(str) {
    let x = '';
    for (let i = str.length - 1; i >= 0; i--) {  
        x += str[i];
    }

    return x;
}

let result = reverseString(N);
console.log(result);


Задача 2.
Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

const N = prompt('Введіть данні: ');  

function isPalindrom(str){

    let left = 0;              
    let right = str.length - 1;  
    while (left < right) {
        if (str[left] !== str[right]) {
          return 'Не паліндром';  
        }
        left++;   
        right--;  
      }
    
      return 'Паліндром';  
    }

    let result = isPalindrom(N); 
    console.log(result);
*/

// Задача 3.
// Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД. 

function findGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;  
      a = temp;
    }
    return a;  
  }
  
  let result = findGCD(120, 37);
  console.log(result);  