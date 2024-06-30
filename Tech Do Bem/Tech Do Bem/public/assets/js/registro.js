function VerificarLogado(){
    const id = localStorage.getItem("id")
    if(id){
        window.open("../../paginas/documentacao.html")

    }
}

async function Registrar() {
  event.preventDefault();

  const nomeOng = document.getElementById("nomeOng");
  const nomeOngvalue = nomeOng.value;
  const email = document.getElementById("email");
  const emailvalue = email.value;
  const telefone = document.getElementById("telefone");
  const telefonevalue = telefone.value;
  const descricao = document.getElementById("descricao");
  const descricaovalue = descricao.value;
  const localizacao = document.getElementById("localizacao");
  const localizacaovalue = localizacao.value;
  const cpf = document.getElementById("cpf");
  const cpfvalue = cpf.value;
  const senha = document.getElementById("senha");
  const senhavalue = senha.value;
  const senhaconf = document.getElementById("senha-conf");
  const senhaconfvalue = senhaconf.value;
  if (senhavalue == senhaconfvalue) {

        await fetch(`http://localhost:3000/usuario`)
        .then((response) => response.json())

        .then(async (json) => {
            for(let i =0; i < json.length; i++){
                if( json[i].email  == emailvalue){
                 alert("Email já existe")
                 return
            }

         
           }
            await fetch("http://localhost:3000/usuario", {
                method:'POST',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                  nomeOng: nomeOngvalue,
                  email: emailvalue,
                  descricao: descricaovalue,
                  telefone: telefonevalue,
                  CNPJ: cpfvalue,
                  localizacao: localizacaovalue,
                  senha: senhavalue
                 })
              }).then((response) => response.json()).then((json) =>{
                for(let i =0; i < json.length; i++){
                }
                alert("Usuário cadastrado com sucesso!")
            })    
          
        })
    
}
}