async function loadUsers() {
  try {
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      const response = await fetch("loginCuentas.json");
      if (!response.ok) {
        throw new Error(
          `Failed to load users: ${response.status} ${response.statusText}`
        );
      }
      users = await response.json();
      localStorage.setItem("users", JSON.stringify(users));
    }
    return users;
  } catch (error) {
    console.error("Error loading users:", error);
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById(
        "register-confirm-password"
      ).value;

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const newUser = { email: email, password: password };
      let users = await loadUsers();

      if (users.some((user) => user.email === email)) {
        alert("Email already registered");
        return;
      }

      users.push(newUser);
      saveUsers(users);

      alert("Registration successful");
      window.location.href = "login.html";
    });
  }
});
