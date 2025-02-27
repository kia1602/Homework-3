//logArguments. Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.

/*function logArguments(fn) {

  return function (...args){
    console.log (args);
    console.log (this);

    return fn.apply(this, args);
  }
}

function sum(a, b) {
  return a +b;
}

const decoratedSum = logArguments(sum);

const result = decoratedSum (6, 6);
console.log ('result >', result)
*/

//validate. Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти аргументи, передані у функцію fn, на відповідність заданому validator. Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
function validate(fn, validator) {
  return function (...args) {
    
    if (!validator(...args)) {
      return 'Invalid arguments';
    }

    return fn(...args);
  };
}

function sum(a, b) {
  return a + b;
}


function isNumber(a, b) {
  return typeof a === 'number' && typeof b === 'number';
}


const validatedSum = validate(sum, isNumber);

console.log(validatedSum(3, 5)); 