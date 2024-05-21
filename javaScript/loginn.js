document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const email = document.getElementById('login-email').value;
          const password = document.getElementById('login-password').value;
          const users = await loadUsers();

          const user = users.find(user => user.email === email && user.password === password);
          if (user) {
              alert('Inicio de sesión exitoso');
              localStorage.setItem('currentUser', JSON.stringify(user));
              window.location.href = 'PaginaPrincipal.html';
          } else {
              alert('Correo electrónico o contraseña incorrectos');
          }
      });
  }

  if (registerForm) {
      registerForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const email = document.getElementById('register-email').value;
          const password = document.getElementById('register-password').value;
          const confirmPassword = document.getElementById('register-confirm-password').value;

          if (password !== confirmPassword) {
              alert('Las contraseñas no coinciden');
              return;
          }

          const users = await loadUsers();
          const userExists = users.some(user => user.email === email);

          if (userExists) {
              alert('El correo electrónico ya está registrado');
              return;
          }

          const newUser = { email, password };
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          alert('Registro exitoso');
          window.location.href = 'Login.html';
      });
  }
});

async function loadUsers() {
  let users = JSON.parse(localStorage.getItem('users'));
  if (!users) {
      const response = await fetch('loginCuentas.json');
      if (!response.ok) {
          throw new Error('No se pudieron cargar los usuarios');
      }
      users = await response.json();
      localStorage.setItem('users', JSON.stringify(users));
  }
  return users;
}
