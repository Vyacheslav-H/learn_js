// 1. Можно ли "перевыполнить" промис?
// Что выведет код ниже?
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
// });
// promise.then(alert);

// Ответ: 1


// 2. Задержка на промисах
// Встроенная функция setTimeout использует колбэк-функции. 
// Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в 
// состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
   return new Promise(resolve => setTimeout(resolve,ms));
 }

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

//3. Анимация круга с помощью промиса
// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

// Новое использование:
// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });
// тут хз как сделать