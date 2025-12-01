let registerFrom = document.querySelector("#register-form");

let registerUsers = JSON.parse(localStorage.getItem("registerUsers")) || [];

let errorMsg = document.querySelector(".error-msg");

registerFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !registerUsers
      .map((user) => user.email)
      .includes(document.querySelector("#email").value.trim().toLowerCase())
  ) {
    registerUsers.push({
      firstName: document.querySelector("#first-name").value,
      lastName: document.querySelector("#last-name").value,
      email: document.querySelector("#email").value.trim().toLowerCase(),
      password: document.querySelector("#password").value,
    });
  } else {
    errorMsg.textContent = "the email is already exist!";
    return;
  }

  localStorage.setItem("registerUsers", JSON.stringify(registerUsers));

  window.location.href = "login.html";
});

//login

/*let loginForm = document.querySelector("#login-form");

if (loginForm) {
  let errorLoginMsg = document.querySelector(".errorlogin-msg");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailFound = registerUsers.find(
      (user) =>
        user.email ===
        document.querySelector("#login-email").value.trim().toLowerCase()
    );
    if (
      emailFound &&
      emailFound.password === document.querySelector("#login-password").value
    ) {
      window.location.href = "index.html";
    } else {
      errorLoginMsg.textContent = "password or email is wrong!";
    }
  });
}*/
