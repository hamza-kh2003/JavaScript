let form = document.querySelector("form");
let cardsContainer = document.querySelector(".cards-container");
let projectsInformation =
  JSON.parse(sessionStorage.getItem("projectsInformation")) || [];

const renderFunction = () => {
  let projectsCard = projectsInformation.map((project) => {
    return `<div class="card">
            <h1>${project.subject}</h1>
            <div>
              <span>Desc: ${project.description}</span>  
            </div>
            <div>
              <span>user types: ${project.userTypes.join(", ")}</span>
            </div>
            <div>
              <span>technology used: ${project.techUsed.join(", ")}</span>
            </div>
          </div>`;
  });

  cardsContainer.innerHTML = projectsCard.join(" ");
};

renderFunction();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  projectsInformation.push({
    subject: document.querySelector("#subject").value,
    description: document.querySelector("#description").value,
    userTypes: Array.from(
      document.querySelectorAll("input[name='user-types']:checked")
    ).map((chb) => chb.value),
    techUsed: Array.from(
      document.querySelectorAll("input[name='tech-used']:checked")
    ).map((chb) => chb.value),
  });

  console.log(projectsInformation);
  sessionStorage.setItem(
    "projectsInformation",
    JSON.stringify(projectsInformation)
  );
  renderFunction();
});
