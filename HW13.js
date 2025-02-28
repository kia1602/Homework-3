//1. Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі. Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі). Використовуйте рекурсію для обчислення чисел Фібоначчі.
/*function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));
*/


//2. Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково. Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. Але. Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома. Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому
/*function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

function findPalindrome(num) {
  let steps = 0;
  let currentNum = num;

  while (!isPalindrome(currentNum)) {
    const reversedNum = parseInt(currentNum.toString().split('').reverse().join(''), 10);
    currentNum += reversedNum;
    steps++;
  }

  return {
    result: currentNum,
    steps: steps
  };
}

const result = findPalindrome(1);
console.log(result);
*/

//3. Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
function generatePermutations(arr) {
  
  if (arr.length === 0) return [[]]; 
  if (arr.length === 1) return [arr]; 
  
  let result = []; 

  
  for (let i = 0; i < arr.length; i++) {
   
    let remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));
    
    
    let remainingPermutations = generatePermutations(remainingElements);
    
   
    for (let perm of remainingPermutations) {
      result.push([arr[i], ...perm]);
    }
  }
  
  return result;
}

const arr = [1, 2, 3];
const permutations = generatePermutations(arr);
console.log(permutations);