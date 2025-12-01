let from = document.querySelector("form");
let cardsContainer = document.querySelector(".cards-container");
let usersInformation =
  JSON.parse(localStorage.getItem("usersInformation")) || [];

const renderFunction = () => {
  let usersCard = usersInformation.map((user) => {
    return `<div class="card">
            <h1>${user.name}</h1>
            <div>
              <span>Age: ${user.age}</span> | 
              <span>Gender: ${user.gender}</span>
            </div>
            <div>
              <span>Major: ${user.major}</span>
            </div>
            <div>
              <span>Languages: ${user.programmingLang.join(", ")}</span>
            </div>
            <p>${user.desc}</p>
          </div>`;
  });

  cardsContainer.innerHTML = usersCard.join(" ");
};

renderFunction();

from.addEventListener("submit", (e) => {
  e.preventDefault();

  let selectedLang = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
  ).map((chb) => chb.value);

  if (selectedLang.length < 3) {
    alert("please add at least 3 programming lanuages");
    return;
  }

  usersInformation.push({
    name: document.querySelector("#name").value,
    age: document.querySelector("#age").value,
    gender: document.querySelector("input[name='gender']:checked").value,
    desc: document.querySelector("#desc").value,
    major: document.querySelector("#major").value,
    programmingLang: selectedLang,
  });

  console.log(usersInformation);
  localStorage.setItem("usersInformation", JSON.stringify(usersInformation));
  renderFunction();
});
