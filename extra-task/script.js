let add = document.querySelector(".add");

let span = document.createElement("span");

span.textContent = "hamza";

add.appendChild(span);

let h2 = document.querySelector("h2");
h2.outerHTML = "<p>New element</p>";

let h3 = document.querySelector("h3");
h3.innerHTML = "<p>New element</p>";

let div = document.querySelector(".container");
console.log(div.firstElementChild);
console.log(div.parentElement);
console.log(div.nextElementSibling);
console.log(div.nextElementSibling.nextElementSibling);
