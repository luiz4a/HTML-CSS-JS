document.addEventListener('DOMContentLoaded', carregarUsuarios)

const carregarUsuarios = () => {
    fetch ('http://localhost:8080/usuarios')
    .then (response => {
        if(!response.ok){
           throw new Error ('Erro ao búscar usuario')
        }
        response.json()
    })

    .then(usuarios => {
        const listaUsuarios = document.getElementeById('ListaUsuarios')
        listaUsuarios.innerHTML = ''; 

        if(usuarios.lenght === 0){
           listaUsuarios.innerHTML = ' <li> Nenhuma Usuario Encontrado. <li>'
           return
        }

        usuarios.forEach(usuario => {
            const item = document.createElement('li')
            item.innerHTML = `<strong>Nome: </strong> ${usuario.nome} <br>
                                <strong>Email</strong>   ${usuario.email} <br>
                                <strong>Telefone</strong>   ${usuario.telefone}<br>
                                <strong>CEP</strong>   ${usuario.cep}<br>
                                <strong>CPF</strong>   ${usuario.cpf}`
            lista.appendChild(item)
               })
    })
    .catch(erro => {
        document.getElementById('listarUsuarios').innerHTML =
        '<li>Erro ao carregar usuarios.</li>'
    })
}