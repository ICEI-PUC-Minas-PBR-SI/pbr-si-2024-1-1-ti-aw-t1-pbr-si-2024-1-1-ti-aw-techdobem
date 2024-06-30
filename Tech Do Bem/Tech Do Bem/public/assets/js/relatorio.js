 async function CarregarTela () {
    const voluntarios = await fetchVoluntarios(); // Supondo que fetchVoluntarios esteja definida e retorne uma lista de objetos

    const tabelaBody = document.querySelector('#tabela-relatorios tbody');

    if (voluntarios) {
        voluntarios.forEach(voluntario => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${voluntario.nome}</td>
                <td>${voluntario.email}</td>
                <td>${voluntario.telefone}</td>
                  <td>
                    <button class="btn-recusar" data-id="${voluntario.id}">Recusar</button>
                </td>
            `;
            tabelaBody.appendChild(tr);
            // Adicionar evento ao botão Recusar
            const btnRecusar = tr.querySelector('.btn-recusar');
            btnRecusar.addEventListener('click', () => recusarVoluntario(voluntario.id));
        });
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="3">Você ainda não possui voluntários.</td>`;
        tabelaBody.appendChild(tr);
    }
};

async function fetchVoluntarios() {
    try {
        const id = localStorage.getItem("id")
        const responseUsuario = await fetch(`http://localhost:3000/usuario/${id}`);
    
        const jsonUsuario = await responseUsuario.json();
        
        const responseVoluntarios = await fetch("http://localhost:3000/voluntarios");
 
        const jsonVoluntarios = await responseVoluntarios.json();
        const voluntariosDaOng = [];
        for (let i = 0; i < jsonVoluntarios.length; i++) {
            const voluntario = jsonVoluntarios[i];
            if (voluntario.ONG === jsonUsuario.nomeOng) {
                voluntariosDaOng.push(voluntario);
            }
        }
        console.log(voluntariosDaOng); 
        return voluntariosDaOng;

    } catch (error) {
        console.error('Erro ao buscar voluntários:', error.message);
        return null; 
    }
}

async function recusarVoluntario(id) {
    await fetch(`http://localhost:3000/voluntarios/${id}`, {
        method: 'DELETE',
    })
    alert("Recusado com sucesso!")
    await CarregarTela();

}