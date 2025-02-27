//1. Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію, яка під час виклику додає це число до аргументу і повертає результат. Якщо аргумент не передано, то додається одиниця. Наприклад, якщо функція викликається з аргументом 5, то функція, що повертається, повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.
/*function summarize(num) {
  return function (arg = 1) {
    return arg + num;
  };
}

const add5 = summarize(5);

console.log(add5(3)); 
console.log(add5());


//2.Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок. Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення. Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.
function counter(startValue, step) {
  let currentValue = startValue; 

  
  return {
    increment: function() {
      currentValue += step; 
      return currentValue;
    },
    decrement: function() {
      currentValue -= step; 
      return currentValue;
    },
    reset: function() {
      currentValue = startValue; 
      return currentValue;
    },
    getValue: function() {
      return currentValue; 
    }
  };
}

const myCounter = counter(10, 2);

console.log(myCounter.increment());
*/

//3. Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції і повертає нову функцію, яка викликає їх послідовно з результатом попереднього виклику. Результат останньої функції має бути повернутий новою функцією. Кожна функція повинна мати доступ до результату попередньої функції через замикання.
function sequence(fn1, fn2) {
  return function(initialValue) {
    let result = fn1(initialValue); 
    result = fn2(result);           
    return result;                  
  };
}

function add(x) {
  return x + 1;
}

function multiply(x) {
  return x * 2;
}

const resultFunction = sequence(add, multiply);

const result = resultFunction(7); 

console.log(result); 