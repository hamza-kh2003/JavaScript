let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let passwordMsg = document.querySelector(".password-msg");
let confirmMsg = document.querySelector(".confirm-msg");

password.addEventListener("input", () => {
  if (password.value.length < 6 && password.value)
    passwordMsg.textContent = "short password";
  else passwordMsg.textContent = "";
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value && confirmPassword.value)
    confirmMsg.textContent = "the two passwords don't match";
  else confirmMsg.textContent = "";
});
