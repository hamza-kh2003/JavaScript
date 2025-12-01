let loginForm = document.querySelector("#login-form");
let errorLoginMsg = document.querySelector(".errorlogin-msg");

let registerUsers = JSON.parse(localStorage.getItem("registerUsers")) || [];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailInput = document
    .querySelector("#login-email")
    .value.trim()
    .toLowerCase();
  let passwordInput = document.querySelector("#login-password").value;

  let userFound = registerUsers.find((user) => user.email === emailInput);

  if (userFound && userFound.password === passwordInput) {
    window.location.href = "index.html";
  } else {
    errorLoginMsg.textContent = "Email or password is incorrect!";
  }
});
