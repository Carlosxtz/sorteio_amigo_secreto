let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("DIGITE UM NOME VÁLIDO");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("DIGITE UM NOME VÁLIDO");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
}
