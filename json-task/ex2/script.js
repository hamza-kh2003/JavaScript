let tableBody = document.querySelector("table tbody");

fetch("users.json")
  .then((res) => res.json())
  .then((data) => {
    let users = data.users;

    users.forEach((user) => {
      let tr = document.createElement("tr");

      let tdName = document.createElement("td");
      tdName.textContent = user.firstName;
      tr.appendChild(tdName);

      let tdPhone = document.createElement("td");
      tdPhone.textContent = user.phone;
      tr.appendChild(tdPhone);

      let tdEmail = document.createElement("td");
      tdEmail.textContent = user.email;
      tr.appendChild(tdEmail);

      tableBody.appendChild(tr);
    });
  });

let div = document.querySelector("div");
let table = document.querySelector("table");

div.addEventListener("click", () => {
  table.style.display = "table";
});

div.addEventListener("dblclick", () => {
  table.style.display = "none";
});
