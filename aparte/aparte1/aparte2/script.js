let lista = JSON.parse(localStorage.getItem('lista'));
if(!lista) {
    lista = [];
}
document.getElementById('button').addEventListener('click', () => {
    let nome_user = document.getElementById('nome').value;
    let senha_user = document.getElementById('senha').value;

    if(nome_user === "" || senha_user === ""){
        alert("prenCHA");
        return
    }
    lista.push({
        nome:nome_user,
        senha:senha_user,
    });
    localStorage.setItem('lista', JSON.stringify(lista));

    document.getElementById('nome').value = "";
    document.getElementById('senha').value = "";

    listar()
})
function listar(){
    document.getElementById('resultado').innerHTML = "";

    let indice = 0;

    for(const lesta of lista){
        document.getElementById('resultado').innerHTML += `
        <h1>${lesta.nome}</h1>
        <h1>${lesta.senha}</h1>
        <button onclick="excluir(${indice})">excluir</button>
        <button onclick="carregar(${indice})">carregar</button>`
        indice ++;
    }
}
function excluir(indice){
    lista.splice(indice,1);
    localStorage.setItem('lista', JSON.stringify(lista));
     listar();

}
function carregar(indice){
   document.getElementById('nome').value = lista[indice].nome;
   document.getElementById('senha').value = lista[indice].senha;

   document.getElementById("alterar").innerHTML = `
   <button onclick="alterar(${indice})"> alterar</button>`;
}
function alterar(indice){
   let novo_nome = document.getElementById('nome').value;
   let nova_senha = document.getElementById('senha').value;

   if(novo_nome ===""|| nova_senha === ""){
    alert("prencha logo");
    return;
   }
   lista[indice].nome = novo_nome;
   lista[indice].senha = nova_senha;

   localStorage.setItem('lista', JSON.stringify(lista));

   document.getElementById('alterar').innerHTML ="";

   document.getElementById("nome").value = "";
   document.getElementById("senha").value = "";
   listar()
}
listar()