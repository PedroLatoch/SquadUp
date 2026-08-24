const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const register_button = document.getElementById('register-button');

register_button.addEventListener('click', function(event) {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirm_password.value.trim();

    if (usernameValue === '' || emailValue === '' || passwordValue === '' || confirmPasswordValue === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    if (passwordValue !== confirmPasswordValue) {
        alert('As senhas não coincidem.');     
        return; 
    }
     alert("Cadastro realizado com sucesso!");

    console.log("Nome:", usernameValue);
    console.log("E-mail:", emailValue);
});