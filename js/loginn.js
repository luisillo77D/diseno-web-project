// Función para cargar usuarios desde el archivo JSON
async function loadUsers() {
    try {
        const response = await fetch('loginCuentas.json');
        if (!response.ok) {
            throw new Error('Failed to load users');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Función para guardar el usuario en el almacenamiento local
function saveUserToLocalStorage(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
}

// Función para obtener el usuario actual del almacenamiento local
function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Función para verificar las credenciales de inicio de sesión
async function login(email, password) {
    const users = await loadUsers();
    for (let user of users) {
        if (user.email === email && user.password === password) {
            saveUserToLocalStorage(user);
            return true; // Credenciales válidas
        }
    }
    return false; // Credenciales inválidas
}

// Función para cerrar sesión
function logout() {
    // Remover el estado de autenticación del localStorage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthenticated');
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'PaginaPrincipal.html';
}

// Función para actualizar la barra de navegación según el estado de la sesión
function updateNavbar() {
    const navSignin = document.getElementById('nav-signin');
    const navLogout = document.getElementById('nav-logout');

    // Verificar si los elementos existen antes de manipularlos
    if (!navSignin || !navLogout) {
        console.error('Navbar elements not found');
        return;
    }

    // Obtener el estado de autenticación del localStorage
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (isAuthenticated) {
        // Usuario autenticado
        navSignin.style.display = 'none';
        navLogout.style.display = 'inline';
    } else {
        // Usuario no autenticado
        navSignin.style.display = 'inline';
        navLogout.style.display = 'none';
    }
}

// Manejo del formulario de inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            if (await login(email, password)) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'PaginaPrincipal.html'; // Redirigir a la página principal
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }

    const navLogout = document.getElementById('nav-logout');
    if (navLogout) {
        navLogout.addEventListener('click', function(event) {
            event.preventDefault();
            logout();
        });
    }

    // Actualizar la barra de navegación al cargar la página
    updateNavbar();
});

function registerUser() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const newUser = {
        email: email,
        password: password
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (response.ok) {
            alert('Registro exitoso');
            window.location.href = 'Login.html';
        } else {
            return response.json().then(errorData => {
                throw new Error(errorData.message);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar. Por favor, inténtalo de nuevo.');
    });
}

document.getElementById("navbar").style.display = "none";

