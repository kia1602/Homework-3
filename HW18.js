//1. sumArrayPromise.Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise. Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.
function sumArrayPromise(numbers) {
  return new Promise((resolve, reject) => {
      
      if (!Array.isArray(numbers) || numbers.some(isNaN)) {
          return reject('Всі елементи масиву повинні бути числами.');
      }

      setTimeout(() => {
          const sum = numbers.reduce((acc, num) => acc + num, 0); 
          resolve(sum); 
      }, 3000);
  });
}
sumArrayPromise([1, 2, 3, 4, 5])
    .then(result => {
        console.log('Сума масиву:', result); 
    })
    .catch(error => {
        console.log('Помилка:', error);
    });

sumArrayPromise([1, 'a', 3])
    .then(result => {
        console.log('Сума масиву:', result);
    })
    .catch(error => {
        console.log('Помилка:', error); 
    });









