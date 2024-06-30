
async function AdicionarVoluntario() {
    try {
        event.preventDefault(); // Evita que a página recarregue ao submeter o formulário

        const nome = document.getElementById("name").value;
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("phone").value;
        const interesse = document.getElementById("interest").value;
        const habilidades = document.getElementById("skills").value;
        const selectOng = document.getElementById("select-ongs-op").value;
        console.log(email); // Verifica se o email está sendo capturado corretamente
        const response = await fetch("http://localhost:3000/voluntarios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                ONG: selectOng,
                email: email,
                telefone: telefone,
                interesse: interesse,
                habilidades: habilidades,
            })
        });
        alert("Voluntário cadastrado com sucesso!");
    } catch (error) {
        console.error('Erro ao adicionar voluntário:', error.message);
        alert('Ocorreu um erro ao cadastrar o voluntário. Por favor, tente novamente.');
    }
}

async function PegarOngs() {
    try {
        const response = await fetch(`http://localhost:3000/usuario`);
        if (!response.ok) {
            throw new Error('Não foi possível obter as ONGs.');
        }
        const ongs = await response.json();

        const select = document.getElementById("select-dinamico");
        select.innerHTML = ''; // Limpa o conteúdo anterior do select

        const selectHTML = document.createElement('select');
        selectHTML.classList.add('input-group-op'); // Adiciona a classe 'input-group' ao select
        selectHTML.setAttribute('id', 'select-ongs-op');

        // Adicionando a primeira opção "Selecione sua ONG"
        const optionDefault = document.createElement('option');
        optionDefault.textContent = 'Selecione sua ONG';
        optionDefault.disabled = true; // Impede que seja selecionada
        optionDefault.selected = true; // Define como selecionada por padrão
        selectHTML.appendChild(optionDefault);

        // Adicionando as opções das ONGs obtidas da API
        if (ongs.length > 0) {
            for (let i = 0; i < ongs.length; i++) {
                const option = document.createElement('option');
                option.textContent = ongs[i].nomeOng; // Ajuste aqui para o campo correto do objeto JSON
                option.value = ongs[i].nomeOng; // Defina o valor conforme necessário
                selectHTML.appendChild(option);
            }
        } else {
            const option = document.createElement('option');
            option.textContent = 'Nenhuma ONG encontrada';
            selectHTML.appendChild(option);
        }

        select.appendChild(selectHTML);

    } catch (error) {
        console.error('Erro ao buscar ONGs:', error.message);
    }

}
