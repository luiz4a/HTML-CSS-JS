const cadastrarUsuario = () => {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const telefone = document.getElementById('telefone').value
    const cep = document.getElementById('cep').value
    const cpf = document.getElementById('cpf').value
    const mensagem = document.getElementById('mensagem').value
    
    fetch('http://localhost:8080/usuarios', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
        body: JSON. stringify({ nome, email, senha, telefone, cep, cpf })
    })
    .then(response => response. json() .then(data => ({ status: response.status, body: data }) ) )
    .then(({ status, body })  => {

    if (status >= 400) {
        let erroMensagem = body.mensagem 
    }
    if (body.erroMensagem){
        erro.Mensagem += ' ' + Object.values(body.errors).join(', ')
        mensagem.textContent = erroMensagem 
        mensagem.classList.remove('Sucesso')
        mensagem.classLIst.add('erro, visivel')
    }else{
        mensagem.textContent =  body.mensagem || 'Usuario Cadastrado com sucesso '
        mensagem.classList.remove('Sucesso')
        mensagem.classLIst.add('erro, visivel')

        document.getElementById('cadastroFomr').rest()
    }
    exibirMensagem()

   })
   .catch(() =>{
    mensagem.textContent = 'Erro ao conectar ao servidor '
    mensagem.classList.remove('Sucesso')
    mensagem.classLIst.add('erro, visivel')
    exibir.Mensagem()
  })
}

const exibirMensagem = () => {
    const mensagem = document.getElementById('mensagem' )
    mensagem.classList.remove('oculto')
    setTimeout(() => fecharMensagem(),5000)
    

    }
    const fecharMensagem = () => {
    const mensagem = document.getElementById('mensagem')
    mensagem.classList.remove('visivel')
    setTimeout(() => mensagem.classList.add('oculto '), 5000)
    }