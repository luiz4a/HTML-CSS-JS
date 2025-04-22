//criando um vertor de objetos 

const usuario = [
    {nome: 'marta', idade: 25},
    {nome: 'maria', idade: 18},
    {nome: 'caio', idade: 30},

]


//exibindo 
//console.log(usuario)

usuario.forEach(usuario => { 
console.log(`Nome: ${usuario.nome} \nidade:  ${usuario.idade} \n`)

})
  