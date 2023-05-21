
let grades = [];

for (let i = 0; i < 10; i++) {
  grades[i] = +prompt("Enter grade №" + (i + 1) + ":");
}

let option;
do {
  option = parseInt(prompt(`Option:
    1. Show grades
    2. Retaking the exam
    3. Scholarship
    0. Exit
    Enter the option number: 1 2 3 0`));
  switch (option) {
    case 1:
      alert(`Current grades: ${grades}`);
      break;
    case 2:
      let index = parseInt(prompt("Enter array number:"));
      let newGrade = +prompt("Enter new  grade:");

      grades[index - 1] = newGrade;

      alert(`Updated values in array element №${index}: ${grades}`);
      break;
    case 3:
      let sum = 0;
      for (let i = 0; i < grades.length; i++) {
        sum = sum + grades[i];
      }
      sum = sum / 10;

      if (sum >= 10.7) {
        alert(`Sum of points = ${sum}. You can get a scholarship.`);
      } else {
        alert(`Sum of points = ${sum}. You CANNOT get a scholarship.`);
      }
      break;
    case 0:
      // alert("Goodbye");
      break;
    default:
      alert("Incorrect choice of option");
  }
} while (option !== 0);

