let operation = prompt("enter operation");
let number1 = Number(prompt("enter the first number"));
let number2 = Number(prompt("enter the second number"));

switch (operation) {
  case "+":
    console.log(number1 + number2);
    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "/":
    console.log(number1 / number2);
    break;

  default:
    console.log("error");
}

let opElement = document.createElement("h1");
opElement.textContent = `the operation is ${operation}`;
document.body.appendChild(opElement);

let num1Element = document.createElement("h2");
num1Element.textContent = `number one is ${number1}`;
document.body.appendChild(num1Element);

let num2Element = document.createElement("h2");
num2Element.textContent = `number two is ${number2}`;
document.body.appendChild(num2Element);
