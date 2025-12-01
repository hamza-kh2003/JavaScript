let from = document.querySelector("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let div = document.querySelector("div");
let table = document.querySelector("table");
let container = document.createElement("div");

from.addEventListener("submit", (e) => {
  e.preventDefault();
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let container = document.createElement("div");
  div.appendChild(container);

  if (name.value) {
    let nameSpan = document.createElement("span");
    nameSpan.style.backgroundColor = "green";
    nameSpan.textContent = name.value;
    container.appendChild(nameSpan);

    let td = document.createElement("td");
    td.textContent = name.value;
    tr.appendChild(td);
  } else alert("add name please");

  if (email.value) {
    let emailSpan = document.createElement("span");
    emailSpan.style.backgroundColor = "red";
    emailSpan.textContent = email.value;
    container.appendChild(emailSpan);

    let td = document.createElement("td");
    td.textContent = email.value;
    tr.appendChild(td);
  } else alert("add email please");

  if (phone.value) {
    let phoneSpan = document.createElement("span");
    phoneSpan.style.backgroundColor = "yellow";
    phoneSpan.textContent = phone.value;
    container.appendChild(phoneSpan);

    let td = document.createElement("td");
    td.textContent = phone.value;
    tr.appendChild(td);
  } else alert("add phone please");
});
