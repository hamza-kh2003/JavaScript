let mark = 59;
let grade;

if (mark >= 90 && mark <= 100) {
  grade = "A+";
} else if (mark >= 80 && mark <= 89) {
  grade = "A";
} else if (mark >= 70 && mark <= 79) {
  grade = "B";
} else if (mark >= 60 && mark <= 69) {
  grade = "C";
} else if (mark >= 50 && mark <= 59) {
  grade = "D";
} else {
  grade = "FAIL";
}
document.write(`Grade = ${grade}`);
