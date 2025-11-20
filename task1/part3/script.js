const radius = 5;
const pi = Math.PI;
const area = pi * radius * radius;
console.log(area);

let h1 = document.querySelector(".output");

h1.innerHTML = `Area of the circle is ${area.toFixed(3)}`;
