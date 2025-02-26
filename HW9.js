//HW9. Задача 1. Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.
/* function isPrime(num) {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true; 
}

function filterPrimeNumbers(arr) {
  return arr.filter(isPrime); 
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17];
const primeNumbers = filterPrimeNumbers(numbers);

console.log(primeNumbers);


//Задача 2. Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date. Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.
function groupNotificationsBySource(notifications) {
  const groupedNotifications = {};

  notifications.forEach(notification => {
    const { source, text, date } = notification;

    if (!groupedNotifications[source]) {
      groupedNotifications[source] = [];
    }

    groupedNotifications[source].push({ text, date });
  });

  return groupedNotifications;
}

const notifications = [
  { source: 'System', text: 'System update available', date: '2025-02-26' },
  { source: 'User', text: 'New message from Alice', date: '2025-02-25' },
  { source: 'System', text: 'Security patch installed', date: '2025-02-24' },
  { source: 'User', text: 'New message from Bob', date: '2025-02-23' },
  { source: 'Admin', text: 'System maintenance scheduled', date: '2025-02-22' }
];

const grouped = groupNotificationsBySource(notifications);
console.log(grouped);
*/

// Задача 3. Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group

const testArr = [
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

//console.log(Object.groupBy (testArr, item =>  item.source));

function customGroupBy (items,callBack) {
  return items.reduce((grouped, item) => {

    if (!grouped.hasOwnProperty(callBack(item))) {
      grouped[callBack(item)] = [];
    }
  //return grouped [cb (item)]? grouped[cb(item)] :
  grouped [callBack(item)].push(item) ;

  return grouped;

}, {});

}
const result = customGroupBy(testArr, item => item.source);
console.log('result >', result);
