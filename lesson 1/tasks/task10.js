/* eslint-disable brace-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-constant-condition */
// Что выведет alert (ИЛИ)?
// важность: 5
// Что выведет код ниже?

alert(null || 2 || undefined); // 2

// Что выведет alert (ИЛИ)?
// важность: 3
// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); // 1 and 2

// Что выведет alert (И)?
// важность: 5
// Что выведет код ниже?

alert(1 && null && 2); // null

// Что выведет alert (И)?
// важность: 3
// Что выведет код ниже?

alert(alert(1) && alert(2)); // 1 and undefined

// Что выведет этот код?
// важность: 5
// Что выведет код ниже?

alert(null || 2 && 3 || 4); // 3

// Проверка значения из диапазона
// важность: 3
// Напишите условие if для проверки,
// что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

if (age >= 14 && age <= 90)

// Проверка значения вне диапазона
// важность: 3
// Напишите условие if для проверки,
// что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

{
  if (age >= 14 && age <= 90) {
    if (age < 14 || age > 90)

    // Вопрос о "if"
    // важность: 5
    // Какие из перечисленных ниже alert выполнятся?
    // Какие конкретно значения будут результатами выражений в условиях if(...)?

    { if (-1 || 0) alert('first'); }
  }
} // first
if (-1 && 0) alert('second'); // не выполняется
if (null || -1 && 1) alert('third'); // thrid

// Проверка логина
// важность: 3
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

const UserName = prompt('Кто вы?');
if (UserName == null) {
  alert('Отменено');
} else if (UserName !== 'Админ') {
  alert('Я вас не знаю');
} else if (UserName === 'Админ') {
  const UserPassword = prompt('Введите пароль');
  if (UserPassword == null) {
    alert('Отменено');
  } else if (UserPassword !== 'Я главный') {
    alert('Неверный пароль');
  } else if (UserPassword === 'Я главный') {
    alert('Здравствуйте!');
  }
}
// крч я когда дописал код-проверил,посмотрел решение и там по другому составлен код этого задания,
// но код работает так,как надо.И вопрос: я по сути выполнил же это задание?
