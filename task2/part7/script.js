let drink = prompt("Enter your favorite drink please!");
let price;
switch (drink.toLocaleLowerCase()) {
  case "banana":
    price = 20;
    break;

  case "apple":
    price = 30;
    break;
  case "orange":
    price = 40;
    break;
  case "mango":
    price = 50;
    break;

  default:
    price = 60;
}

console.log(
  `The price of a ${drink.toLocaleLowerCase()} drink is ${price} dollars`
);
