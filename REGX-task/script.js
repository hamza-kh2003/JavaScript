//name
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
const pattern = /^[A-Za-z]+$/;
let firstNameMsg = document.querySelector(".firstname-msg");
let lastNameMsg = document.querySelector(".lastname-msg");
firstName.addEventListener("input", () => {
  if (!pattern.test(firstName.value) && firstName.value)
    firstNameMsg.textContent = "should have just letters";
  else firstNameMsg.textContent = "";
});

lastName.addEventListener("input", () => {
  if (!pattern.test(lastName.value) && lastName.value)
    lastNameMsg.textContent = "should have just letters";
  else lastNameMsg.textContent = "";
});

//birth date
let birthDate = document.getElementById("birth-date");
let birthDateMsg = document.querySelector(".birthdate-msg");
birthDate.addEventListener("change", () => {
  let selectedDate = new Date(birthDate.value);
  let today = new Date();

  if (selectedDate > today)
    birthDateMsg.textContent = "Birth date cannot be in the future!";
  else birthDateMsg.textContent = "";
});

//email
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = document.getElementById("email");
let emailMsg = document.querySelector(".email-msg");
let confirmEmail = document.getElementById("confirm-email");
let confirmEmailMsg = document.querySelector(".confirmemail-msg");

email.addEventListener("input", () => {
  if (!emailPattern.test(email.value) && email.value)
    emailMsg.textContent = " enter a valid email address";
  else emailMsg.textContent = "";
});

confirmEmail.addEventListener("input", () => {
  if (confirmEmail.value !== email.value && confirmEmail.value)
    confirmEmailMsg.textContent = "the email don't match!";
  else confirmEmailMsg.textContent = "";
});

//password
const passwordPattern =
  /^(?=[A-Z])(?=(?:.*\d){2,})(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]).{8,32}$/;

let password = document.getElementById("password");
let passwordMsg = document.querySelector(".password-msg");
let confirmPassword = document.getElementById("confirm-password");
let confirmPasswordMsg = document.querySelector(".confirmpassword-msg");

password.addEventListener("input", () => {
  if (!passwordPattern.test(password.value) && password.value)
    passwordMsg.textContent =
      "password must start with a capital letter, include at least two numbers and one special character, and be 8–32 characters long";
  else passwordMsg.textContent = "";
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value && confirmPassword.value)
    confirmPasswordMsg.textContent = "the password don't match!";
  else confirmPasswordMsg.textContent = "";
});

let form = document.querySelector("form");
let submitBtn = form.querySelector('input[type="submit"]');

//disabled button

function checkFormValidity() {
  const allValid =
    !firstNameMsg.textContent &&
    !lastNameMsg.textContent &&
    !birthDateMsg.textContent &&
    !emailMsg.textContent &&
    !confirmEmailMsg.textContent &&
    !passwordMsg.textContent &&
    !confirmPasswordMsg.textContent &&
    firstName.value &&
    lastName.value &&
    birthDate.value &&
    email.value &&
    confirmEmail.value &&
    password.value &&
    confirmPassword.value;

  submitBtn.disabled = !allValid;
}

[
  firstName,
  lastName,
  birthDate,
  email,
  confirmEmail,
  password,
  confirmPassword,
].forEach((input) => {
  input.addEventListener("input", checkFormValidity);
  input.addEventListener("change", checkFormValidity);
});

submitBtn.disabled = true;
