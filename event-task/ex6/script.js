let startBtn = document.querySelector(".start-btn");
let box = document.querySelector(".box");

startBtn.addEventListener("click", () => {
  let time = prompt("choose time in seconds");
  time = parseFloat(time);
  if (!time || time <= 0) return;

  box.style.animation = "none";

  box.offsetWidth;

  box.style.animation = `colorChange ${time}s 1`;
});
