const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const register_button = document.getElementById('register-button');
const login_button = document.getElementById('login_button')

register_button.addEventListener('click', function(event) {
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
        alert('As senhas não coincidem.');     
        return; 
    }
     alert("Cadastro realizado com sucesso!");

    console.log("Nome:", usernameValue);
    console.log("E-mail:", emailValue);
});
login_button.addEventListener('click', function(event){
 event.preventDefault();


})
function Modal_Registro_sem_campos() {
    const modal = document.getElementById("modal_sem_usuario");

    modal.innerHTML = `
        <div class="modal-conteudo">
            <button class="modal-fechar" onclick="fecharModal()">×</button>

            <div class="modal-icone">!</div>

            <h1>Campos incompletos</h1>

            <p>Por favor, preencha todos os campos do registro para prosseguir.</p>

            <p class="modal-registro">
                Já possui cadastro?
                <a href="../login.html">Fazer login</a>
            </p>
        </div>
    `;

    modal.classList.add("modal-aberto");
}

function fecharModal() {
    document
        .getElementById("modal_sem_usuario")
        .classList.remove("modal-aberto");
}