async function editarPerfil() {
    const id = localStorage.getItem("id")

    fetch(`http://localhost:3000/usuario/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            nomeOng: document.getElementById("nomeOng").value,
            descricao: document.getElementById("descricao").value,
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
            document.getElementById("email").value = json.email
            document.getElementById("telefone").value = json.telefone
            document.getElementById("CNPJ").value = json.CNPJ
            document.getElementById("localizacao").value = json.localizacao
            alert("Usuário editado com sucesso!")
        });
}
async function RecuperarDadosDoUsuario() {
    const id = localStorage.getItem("id")
        await fetch(`http://localhost:3000/usuario/${id}`)
        .then((response) => response.json())
        .then((json) => {   
    document.getElementById("nomeOng").value = json.nomeOng
    document.getElementById("descricao").value = json.descricao
    document.getElementById("email").value = json.email
    document.getElementById("telefone").value = json.telefone
    document.getElementById("CNPJ").value = json.CNPJ
    document.getElementById("localizacao").value = json.localizacao
        });
}