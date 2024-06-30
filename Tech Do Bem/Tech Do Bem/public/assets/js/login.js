function VerificarLogado(){
    const id = localStorage.getItem("id")
    if(id){
        window.open("../../paginas/documentacao.html")

    }
}
async function Logar(){
    event.preventDefault()

    const emailuser = document.getElementById("email")
    const emailvalue = emailuser.value
    const senhauser = document.getElementById("senha")
    const senhavalue = senhauser.value
 

    console.log(emailvalue,senhavalue)
 
    await fetch(`http://localhost:3000/usuario`)
    .then((response) => response.json())
    .then((json) => {
        for(let i =0; i < json.length; i++){
            const emailuserdb = json[i].email
            const senhauserdb = json[i].senha
            
       console.log("json senha", senhauserdb)
       console.log("emailuserdb ", emailuserdb)

       
        if(emailvalue == emailuserdb && senhavalue== senhauserdb ){
            window.open("../../paginas/documentacao.html")
            localStorage.setItem( "id", json[i].id)
        }else if(emailvalue != emailuserdb && senhavalue !=senhauserdb){
            alert("Usuario não cadastrado")
        }else if(emailvalue != emailuserdb  || senhavalue != senhauserdb){
            alert("Email ou senha incorreto")
        } 
        }}
    )    
        }
     


         function Sair(){
            localStorage.removeItem("id")
            window.open("../index.html")

        }
