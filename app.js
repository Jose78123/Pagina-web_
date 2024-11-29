// Interacción para mostrar/ocultar los formularios
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const signupForm = document.getElementById('signup-form');
const loginForm = document.querySelector('.login-form');

signupBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

loginBtn.addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});

