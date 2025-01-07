//ДЗ 3.1. Домашнє завдання №3
// Задача 1. Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа. 
// Якщо число ділиться на 3, то повідомлення має бути Fizz, 
// якщо число ділиться на 5, то повідомлення має бути Buzz, 
// а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. 
// Наприклад, для числа 15 повідомлення має бути FizzBuzz.


/* const sumNumber = +prompt ('Введіть число');
const dividedIntoThree = 'Fizz';
const dividedIntoFive = 'Buzz';
const dividedIntoThreeAndFive = 'FizzBuzz';
const notDivided = 'Not Divided';

if (Number.isNaN(sumNumber)){
    console.log ('Введені дані не можуть бути опрацьовані. Перевірте їх ще раз');
} else {
    if (sumNumber % 3 === 0 && sumNumber % 5 === 0 ) {
        console.log (dividedIntoThreeAndFive);
        } else {
            if (sumNumber % 3 === 0) {
                console.log (dividedIntoThree);
            } else {
                if (sumNumber % 5 === 0) {
                    console.log (dividedIntoFive);
                } else {
                    console.log (notDivided);
                }
            }
        }
        }
*/ 

//Задача 2. Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення, 
// що вказує, чи є введений рік високосним.
/*const sumYear = +prompt ('Введіть рік'); 
const leapYear = 'Цей рік високосний';
const nonLeapYear = 'Цей рік не високосний';

if (Number.isNaN(sumYear)){
    console.log ('Введені дані не можуть бути опрацьовані. Перевірте їх ще раз');
} else {
    if (sumYear % 4 === 0 && sumYear % 100 != 0) {
        console.log (leapYear);
        } else {
            if (sumYear % 400 === 0) {
                console.log (nonLeapYear);
        }
    }
}
*/

//Задача 3. Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік / роки / років. 
// Залежно від числа N слово рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.
const years = +prompt ('Вкажіть ваш вік'); 
let ending = '';

if (Number.isNaN(years)){
    console.log ('Введені дані не можуть бути опрацьовані. Перевірте їх ще раз');
} else if (years => 111 && years <=114) {
        ending = 'років';
} else if (years >=5 && years <= 20) {
        ending = 'років';
    } else if (years % 10 === 1) {
        ending = 'рік';
    } else if (years % 10 >= 2 && years % 10 <= 4) {
        ending = 'роки';
    } else if (years % 10 >= 5 && years % 10 <= 9 || years % 10 === 0) {
        ending = 'років';
    }

    console.log ('Вам ' + years + ' ' + ending);