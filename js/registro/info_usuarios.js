const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const register_button = document.getElementById('register-button');
const login_button = document.getElementById('login_button')

register_button.addEventListener('click', function (event) {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirm_password.value.trim();

    if (usernameValue === '' || emailValue === '' || passwordValue === '' || confirmPasswordValue === '') {
        Modal_Registro_sem_campos()
        return;
    }
    if (passwordValue !== confirmPasswordValue) {
        Modal_Registro_senhas_diferentes()
        return;
    }

    location.href = '../login.html';
});
login_button.addEventListener('click', function (event) {
   


})
function Modal_Registro_sem_campos() {
    const modal = document.getElementById("modal_sem_usuario");

    modal.innerHTML = `
        <div class="modal-conteudo">
            <button class="modal-fechar" onclick="fecharModalCampos()">×</button>

            <div class="modal-icone">!</div>

            <h1>Campos incompletos</h1>

            <p>Por favor, preencha todos os campos do registro para prosseguir.</p>
        </div>
    `;

    modal.classList.add("modal-aberto");
}
function fecharModalCampos() {
    const modal = document.getElementById("modal_sem_usuario");

    modal.classList.remove("modal-aberto");
}
function Modal_Registro_senhas_diferentes() {
    const modal = document.getElementById("modal_sem_usuario");

    modal.innerHTML = ` 
    <div class="modal-conteudo"> 

     <button class="modal-fechar" onclick="fecharModalSenha()">×</button> 

     <div class="modal-icone">!</div> 

     <h1>Senhas diferentes</h1> 

     <p>As senhas informadas não coincidem. Verifique os campos e tente novamente.</p> 
    </div> `;

    modal.classList.add("modal-aberto");
}
function fecharModalSenha() {
    const modal = document.getElementById("modal_sem_usuario");

    modal.classList.remove("modal-aberto");
}