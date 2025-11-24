let x = Number(prompt("enter x"));
let y = Number(prompt("enter y"));
let result;
if (x > y) {
  result = "Hello World";
} else {
  result = "Goodbye";
}

alert(result);
console.log(result);

let h1 = document.getElementById("output");
h1.textContent = result;
