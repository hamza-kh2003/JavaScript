let select = document.querySelector("select");
let img = document.createElement("img");
img.width = "300";
document.body.appendChild(img);
const ob = {
  france: "./img/france.png",
  canada: "./img/canada.png",
  japan: "./img/japan.png",
  unitedStates: "./img/united_states.png",
  china: "./img/china.png",
  brazil: "./img/brazil.png",
};

select.addEventListener("change", () => {
  img.src = ob[select.value];
});
