const age = "13";
console.log(age);

const name= "Daryna";
console.log(name);

const isStudent = false;
console.log(isStudent);

const myString = "Потроху йдем в перед.";
console.log(myString);


const myNumber = 10 + 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

const username = prompt("Введіть своє ім'я!")
console.log(username);

const isOk = confirm("Вітаємо з використанням введеного імені.")
console.log(isOk);


if (isOk) {
    alert('Дякую за підтвердження!');
  } else {
    alert('Дію відмінено!');
  }


alert('Помилка! Дія небезпечна! Могли б її підтвердити знову?')

const choice = confirm("Підтверджуєте дію?")
console.log(choice);

if (choice) {
    alert('Дякую за підтвердження!');
  } else {
    alert('Дію відмінено!');
  }