    //ДЗ 4.1. Домашнє завдання №4
    // Задача 1. Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: 
    // Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.

   /* const N = +prompt ('Введіть число: ');
     
    if (N <= 1) {
        console.log ('Складене число');
        } else if (N === 2){
            console.log ('Просте число');
        } else if (N === 9){
            console.log ('Складене число');
        } else {
          for (let i = 2; i <= N; i++){
            if (N % i === 0){
                console.log ('Складне число'); 
                break;
                } else {
                    if (N % i !=0){
                        console.log ('Просте число');
                        break;
                    }
                }
            }
          } 
            */

// Задача 2. Вам необхідно написати програму, 
// яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, 
// які є досконалими числами.
   /*const N = +prompt ('Введіть число: ');     

   const perfectNumbers = findPerfectNumbers(N);

   function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
   }
   return sum === n;
}


   function findPerfectNumbers(N) {
    let perfectNumbers = [];
    for (let i = 1; i <= N; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}
        

   console.log ('Досконалі числа у введеному діапазоні: ' + perfectNumbers);

*/

//Вам необхідно написати програму, яка приймає на вхід число, 
// що буде висотою вершини вашої ялинки. 
// Уся ялинка має бути реалізована одним рядком:

const height = +prompt ('Height: ');

 let stars = 1

 for (let i = height; i > 0; i --) {
    let row = '';

    for (let k = 0; k < i; k++) {
        row = row + ' ';
    }

    for (let j = 0; j < stars; j++){
        row = row + "*";
    }

    stars = stars + 2;

    console.log(row);
 }
