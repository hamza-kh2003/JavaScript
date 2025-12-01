let italic = document.getElementById("italic");
let bold = document.getElementById("bold");
let underline = document.getElementById("underline");
let p = document.querySelector("p");
let selectFamily = document.querySelector(".font-family");
let selectSize = document.querySelector(".font-size");

italic.addEventListener("change", () => {
  if (italic.checked) p.style.fontStyle = "italic";
  else p.style.fontStyle = "normal";
});

bold.addEventListener("change", () => {
  if (bold.checked) p.style.fontWeight = "bold";
  else p.style.fontWeight = "normal";
});

underline.addEventListener("change", () => {
  if (underline.checked) p.style.textDecoration = "underline";
  else p.style.textDecoration = "none";
});

selectFamily.addEventListener("change", () => {
  p.style.fontFamily = selectFamily.value;
});

selectSize.addEventListener("change", () => {
  p.style.fontSize = selectSize.value;
});
