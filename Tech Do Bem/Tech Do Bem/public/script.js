async function editarPerfil() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            nomeOng: document.getElementById("nomeOng").value,
            descricao: document.getElementById("descricao").value,
            destinacao: document.getElementById("destinacao").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            CNPJ: document.getElementById("CNPJ").value,
            localizacao: document.getElementById("localizacao").value,

        }),
    })
        .then((response) => response.json())
        .then((json) => {
            document.getElementById("nomeOng").value = json.nomeOng
            document.getElementById("descricao").value = json.descricao
            document.getElementById("destinacao").value = json.destinacao
            document.getElementById("email").value = json.email
            document.getElementById("telefone").value = json.telefone
            document.getElementById("CNPJ").value = json.CNPJ
            document.getElementById("localizacao").value = json.localizacao
        });
}
async function RecuperarDadosDoUsuario() {
    const id = localStorage.getItem("id")

    const usuario = await fetch(`http://localhost:3000/{id}`);
    const usuariojson = usuario.json

    document.getElementById("nomeOng").value = usuariojson.nomeOng
    document.getElementById("descricao").value = usuariojson.descricao
    document.getElementById("destinacao").value = usuariojson.destinacao
    document.getElementById("email").value = usuariojson.email
    document.getElementById("telefone").value = usuariojson.telefone
    document.getElementById("CNPJ").value = usuariojson.CNPJ
    document.getElementById("localizacao").value = usuariojson.localizacao
}