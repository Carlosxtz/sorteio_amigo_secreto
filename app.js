let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();
    if (nome === "") {
        alert("DIGITE UM NOME VÁLIDO");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("DIGITE UM NOME VÁLIDO");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
}
