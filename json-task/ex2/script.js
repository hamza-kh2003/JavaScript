let jsonObject1 = `{
  "users": [
    {"name": "Terry Medhurst", "email": "terry@example.com", "phone": "123-456-7890"},
    {"name": "Sheldon Quigley", "email": "sheldon@example.com", "phone": "234-567-8901"},
    {"name": "Floyd Miles", "email": "floyd@example.com", "phone": "345-678-9012"},
    {"name": "Cameron Williamson", "email": "cameron@example.com", "phone": "456-789-0123"},
    {"name": "Kristin Watson", "email": "kristin@example.com", "phone": "567-890-1234"},
    {"name": "Darlene Robertson", "email": "darlene@example.com", "phone": "678-901-2345"},
    {"name": "Eleanor Pena", "email": "eleanor@example.com", "phone": "789-012-3456"},
    {"name": "Guy Hawkins", "email": "guy@example.com", "phone": "890-123-4567"},
    {"name": "Jenny Wilson", "email": "jenny@example.com", "phone": "901-234-5678"},
    {"name": "Devon Lane", "email": "devon@example.com", "phone": "012-345-6789"},
    {"name": "Mason Bryant", "email": "mason@example.com", "phone": "111-222-3333"},
    {"name": "Harper Lowe", "email": "harper@example.com", "phone": "222-333-4444"},
    {"name": "Avery Rice", "email": "avery@example.com", "phone": "333-444-5555"},
    {"name": "Liam Osborne", "email": "liam@example.com", "phone": "444-555-6666"},
    {"name": "Sophia Ball", "email": "sophia@example.com", "phone": "555-666-7777"},
    {"name": "Noah Hunter", "email": "noah@example.com", "phone": "666-777-8888"},
    {"name": "Emma Sharp", "email": "emma@example.com", "phone": "777-888-9999"},
    {"name": "Oliver Floyd", "email": "oliver@example.com", "phone": "888-999-0000"},
    {"name": "Isabella Long", "email": "isabella@example.com", "phone": "999-000-1111"},
    {"name": "Lucas Dean", "email": "lucas@example.com", "phone": "000-111-2222"},
    {"name": "Mia Harper", "email": "mia@example.com", "phone": "123-321-1234"},
    {"name": "Ethan Pierce", "email": "ethan@example.com", "phone": "234-432-2345"},
    {"name": "Ava Curtis", "email": "ava@example.com", "phone": "345-543-3456"},
    {"name": "James Webb", "email": "james@example.com", "phone": "456-654-4567"},
    {"name": "Charlotte Cole", "email": "charlotte@example.com", "phone": "567-765-5678"},
    {"name": "Benjamin Lowe", "email": "benjamin@example.com", "phone": "678-876-6789"},
    {"name": "Amelia Grant", "email": "amelia@example.com", "phone": "789-987-7890"},
    {"name": "Alexander Fox", "email": "alexander@example.com", "phone": "890-098-8901"},
    {"name": "Harper Gibson", "email": "harper.g@example.com", "phone": "901-109-9012"},
    {"name": "Evelyn Wells", "email": "evelyn@example.com", "phone": "012-210-0123"},
    {"name": "Logan Hayes", "email": "logan@example.com", "phone": "123-321-1235"},
    {"name": "Abigail Myers", "email": "abigail@example.com", "phone": "234-432-2346"},
    {"name": "Jacob Stone", "email": "jacob@example.com", "phone": "345-543-3457"},
    {"name": "Ella West", "email": "ella@example.com", "phone": "456-654-4568"},
    {"name": "Michael Knox", "email": "michael@example.com", "phone": "567-765-5679"},
    {"name": "Scarlett Lane", "email": "scarlett@example.com", "phone": "678-876-6780"},
    {"name": "David Hart", "email": "david@example.com", "phone": "789-987-7891"},
    {"name": "Grace Mason", "email": "grace@example.com", "phone": "890-098-8902"},
    {"name": "Joseph Shaw", "email": "joseph@example.com", "phone": "901-109-9013"},
    {"name": "Lily Ellis", "email": "lily@example.com", "phone": "012-210-0124"},
    {"name": "Henry Black", "email": "henry@example.com", "phone": "123-321-1236"},
    {"name": "Zoe Clark", "email": "zoe@example.com", "phone": "234-432-2347"}
  ]
}`;

let tableBody = document.querySelector("table tbody");
let users = JSON.parse(jsonObject1).users;

users.forEach((user) => {
  let tr = document.createElement("tr");

  let tdName = document.createElement("td");
  tdName.textContent = user.name;
  tr.appendChild(tdName);

  let tdPhone = document.createElement("td");
  tdPhone.textContent = user.phone;
  tr.appendChild(tdPhone);

  let tdEmail = document.createElement("td");
  tdEmail.textContent = user.email;
  tr.appendChild(tdEmail);

  tableBody.appendChild(tr);
});

let div = document.querySelector("div");
let table = document.querySelector("table");

div.addEventListener("click", () => {
  table.style.display = "table";
});

div.addEventListener("dblclick", () => {
  table.style.display = "none";
});
