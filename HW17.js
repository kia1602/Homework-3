//1. randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.
/*function randomDelayPrint(message) {
 
  for (let i = 0; i < message.length; i++) {
    
    const delay = Math.random() * 1000;

    
    setTimeout(() => {
      console.log(message[i]);
    }, delay);
  }
}


randomDelayPrint("Hello, World!");
*/


//2. debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.
/*function debounce(callback, delay) {
  let timeout;

  return function(...args) {
      clearTimeout(timeout); 
      timeout = setTimeout(() => {
          callback(...args); 
      }, delay);
  };
}


function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    
    clearTimeout(timeoutId);

  
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}


const logMessage = (message) => {
  console.log(message);
};

const debouncedLogMessage = debounce(logMessage, 2000);


debouncedLogMessage("Hello, World!");  
debouncedLogMessage("Second call");    
debouncedLogMessage("Last call");
*/

//3. intervalRac.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. Коли всі функції виконано, intervalRace має повернути масив із результатами.
function intervalRace(functions, t) {
  let results = [];
  let index = 0;

  return new Promise((resolve, reject) => {
      function executeNextFunction() {
          if (index < functions.length) {
              
              functions[index]()
                  .then(result => {
                      results.push(result); 
                      index++; 

                       
                      setTimeout(executeNextFunction, t);
                  })
                  .catch(err => reject(err)); 
          } else {
              resolve(results); 
          }
      }

      
      executeNextFunction();
  });
}
function asyncTask1() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("Результат функції 1");
      }, 1000);
  });
}

function asyncTask2() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("Результат функції 2");
      }, 500);
  });
}

function asyncTask3() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("Результат функції 3");
      }, 1500);
  });
}

const functions = [asyncTask1, asyncTask2, asyncTask3];

intervalRace(functions, 1000).then(results => {
  console.log(results); 
});








