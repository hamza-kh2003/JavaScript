let monthInNumber = Number(
  prompt("enter your birthdate month in number please!")
);
let monthInWord;
switch (monthInNumber) {
  case 1:
    monthInWord = "January";
    break;
  case 2:
    monthInWord = "February";
    break;
  case 3:
    monthInWord = "March";
    break;
  case 4:
    monthInWord = "April";
    break;
  case 5:
    monthInWord = "May";
    break;
  case 6:
    monthInWord = "June";
    break;
  case 7:
    monthInWord = "July";
    break;
  case 8:
    monthInWord = "August";
    break;
  case 9:
    monthInWord = "September";
    break;
  case 10:
    monthInWord = "October";
    break;
  case 11:
    monthInWord = "November";
    break;
  case 12:
    monthInWord = "December";
    break;

  default:
    monthInWord = "Not valid number";
}

console.log(monthInWord);
document.write(monthInWord);
