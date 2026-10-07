let lista = JSON.parse(localStorage.getItem('lista'));

if(!lista){
   lista = []; 
}
document.getElementById('submit').addEventListener('click',() => {
    let nome1 = document.getElementById('oi').value;
    let email1 = document.getElementById('oi1').value;

    lista.push({
    nome: nome1,
    email: email1
    })
    localStorage.setItem('lista', JSON.stringify(lista));
    document.getElementById('oi').value = "";
    document.getElementById('oi1').value = "";
    listar()
})
function listar(){
    document.getElementById('aparecer').innerHTML = "";
    let indice = 0;

    for(const lesta of lista){
        document.getElementById('aparecer').innerHTML += `
        <h1>${lesta.nome}</h1>
        <h1>${lesta.email}</h1>
        `;
        indice ++
    }
}
