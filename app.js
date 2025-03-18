let listaDeAmigos = [];

function adicionarNome() {
    let nome = document.getElementById('amigo').value;
    if (nome === "") {
        alert("DIGITE UM NOME VÁLIDO");
        return;
    }
    listaDeAmigos.push(nome);
    document.getElementById('listaAmigos').innerHTML = listaDeAmigos.join('<br>');
    document.getElementById('amigo').value = "";
}

function sortear() {
    if (listaDeAmigos.length === 0) {
        alert("DIGITE UM NOME VÁLIDO");
        return;
    }
    let sorteio = Math.floor(Math.random() * listaDeAmigos.length);
    document.getElementById('resultado').innerHTML = `Sorteado: ${listaDeAmigos[sorteio]}`;
}
