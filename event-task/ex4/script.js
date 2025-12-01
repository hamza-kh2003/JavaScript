/*let showButton = document.querySelector(".show-btn");
let hideButton = document.querySelector(".hide-btn");
let p = document.querySelector("p");

showButton.addEventListener("click", () => {
  if (p.classList.contains("hidden")) {
    p.classList.remove("hidden");
    hideButton.classList.remove("hidden");
    showButton.classList.add("hidden");
  } else {
    p.classList.add("hidden");
    hideButton.classList.add("hidden");
  }
});

hideButton.addEventListener("click", () => {
  p.classList.add("hidden");
  hideButton.classList.add("hidden");
  showButton.classList.remove("hidden");
});*/

let containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  let showBtn = container.querySelector(".show-btn");
  let hideBtn = container.querySelector(".hide-btn");
  let paragraph = container.querySelector("p");

  showBtn.addEventListener("click", () => {
    paragraph.classList.remove("hidden");
    hideBtn.classList.remove("hidden");
    showBtn.classList.add("hidden");
  });

  hideBtn.addEventListener("click", () => {
    paragraph.classList.add("hidden");
    hideBtn.classList.add("hidden");
    showBtn.classList.remove("hidden");
  });
});
