// let grade = [];
// for(let i = 0; i < 10; i++){
//     grade[i] = +prompt(`Enter grade # ${i} `);
// }
// for(let i = 0; i < 10; i++){
//     document.write(grade[i]);
// }


// створення масиву для зберігання оцінок
let marks = [];
// отримання 10 оцінок від користувача та додавання їх до масиву
for (let i = 1; i <= 10; i++) {
  let mark = parseFloat(prompt(`Введіть оцінку №${i}:`));
  marks.push(mark);
}

// функція для виведення оцінок
function showMarks() {
  console.log(marks);
}

// функція для перездачі іспиту
function retakeExam() {
  let index = parseInt(prompt("Введіть номер елемента масиву:"));
  let newMark = parseFloat(prompt("Введіть нову оцінку:"));
  // перезаписуємо оцінку за вказаним індексом
  marks[index - 1] = newMark;
}

// функція для перевірки можливості отримати стипендію
function checkScholarship() {
  let average = marks.reduce((a, b) => a + b) / marks.length;
  if (average >= 10.7) {
    console.log("Можна отримати стипендію");
  } else {
    console.log("Студент не отримує стипендію");
  }
}

// основний код програми
let choice;
do {
  choice = parseInt(prompt(`Меню:
  1. Вивід оцінок
  2. Перездача іспиту
  3. Перевірка можливості отримати стипендію
  0. Вихід з програми
  Введіть номер опції:`));
  switch (choice) {
    case 1:
      showMarks();
      break;
    case 2:
      retakeExam();
      break;
    case 3:
      checkScholarship();
      break;
    case 0:
      console.log("До побачення!");
      break;
    default:
      console.log("Неправильний вибір опції.");
  }
} while (choice !== 0);

