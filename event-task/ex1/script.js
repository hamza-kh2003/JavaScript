let p = document.querySelector("p");

p.addEventListener("mouseover", () => {
  p.style.backgroundColor = "yellow";
  p.style.fontWeight = "bold";
});
p.addEventListener("mouseout", () => {
  p.style.backgroundColor = "white";
  p.style.fontWeight = "normal";
});
