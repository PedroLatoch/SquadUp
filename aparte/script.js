let lista = JSON.parse(localStorage.getItem("lista"))

if (!lista){
  lista = [];
}

document.getElementById("enviar").addEventListener('click', ()=> {

    let nome1 = document.getElementById("nome").value;
    let secao1 = document.getElementById("secao").value;

    if(nome1 === "" || secao1 === ""){
        alert('prencha todos os campos')
        return
    }
     
    lista.push({
        nome: nome1,
        secao: secao1,
    })
    localStorage.setItem('lista', JSON.stringify(lista));
    document.getElementById("nome").value = "";
    document.getElementById("secao").value = "";

    listar()
})
function listar(){
    document.getElementById('resultado').innerHTML = "";

    let indice = 0;

    for(const lesta of lista){
        document.getElementById('resultado').innerHTML += `
        <h1>${lesta.nome}</h1>
        <h1>${lesta.secao}</h1>
        <button onclick="excluir(${indice})">excluir
        </button>`;
        indice ++
    }
}
function excluir(indice){
    lista.splice(indice, 1);
    localStorage.setItem('lista', JSON.stringify(lista));
    listar ()
}
