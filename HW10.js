//HW10. Задача 1. Вам необхідно використовувати масив нотифікацій з минулих занять. До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор, щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.
/*const testArr = [
  {
    source: 'google.com',
    text: 'Some message',
    date: new Date(),
  },
  {
    source: 'fb.com',
    text: 'Some message3',
    date: new Date(),
  },
  {
    source: 'google.com',
    text: 'Some message3ere',
    date: new Date(),
  },
  {
    source: 'fb.com',
    text: 'Some message3ere55555',
    date: new Date(),
  },
];

function groupNotificationsBySource(notifications) {
  const grouped = {};

  
  notifications.forEach(notification => {
    const { source, text, date } = notification;

    if (!grouped[source]) {
      grouped[source] = [];
    }

    grouped[source].push({ text, date });
  });

  grouped[Symbol.iterator] = function* () {
    for (const source in grouped) {
      
      for (const notification of grouped[source]) {
        yield notification;
      }
    }
  };

  return grouped;
}

const groupedNotifications = groupNotificationsBySource(testArr);

for (const notification of groupedNotifications) {
  console.log(notification);
}


//Задача 2. Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання, щоб уникнути повторних обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами, то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    
    const key = args.join(',');  

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowFunction = (x, y) => {

  return x + y;
};

const memoizedSlowFunction = memoize(slowFunction);

console.log('Result =>', memoizedSlowFunction(1, 2));
*/

//Задача 3. Встановіть обмеження на розмір кеша у вигляді числа N. Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.
function memoize(fn, N) {
  const cache = {}; 

  return function(...args) {
    const key = args.join(','); 
    if (cache[key] !== undefined) {
      return cache[key];
    }

    const result = fn(...args);

    const keys = Object.keys(cache); 
    if (keys.length >= N) {
      const firstKey = keys[0];
      delete cache[firstKey];
    }

    cache[key] = result;
    return result;
  };
}

const slowFunction = (x, y) => {
  return x + y;
};

const memoizedSlowFunction = memoize(slowFunction, 3); 

console.log('Result =>', memoizedSlowFunction(2, 3));