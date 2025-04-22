//criando um vertor de objetos 

const usuario = [
    {nome: 'marta', idade: 35},
    {nome: 'maria', idade: 18},
    {nome: 'caio', idade: 30},

]

//Filtrar idade maior que 30
const idadeMairoQue30 = usuario.filter(usuario => usuario.idade > 30 )

//console.log(idadeMairoQue30)

console.log('listando todos os usuarios ')
usuario.forEach(usuario => 
    console.log(`Nome: ${usuario.nome} \nidade:  ${usuario.idade} \n`))

console.log('\nidade maior que 30 ')
idadeMairoQue30.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}  idade: ${usuario.idade}`)
})

//encontrar um usuario especifico 
const usuarioEncontrado = usuario.find(usuario => usuario.nome ==='maria')

//devolve um objeto 
console.log(`\nEncontrando Usuario.` )

// Buscar em uma lista de apenas nomes 
console.log(`\n Lista com nome dos usuarios.`)
const apenasNomes = usuario.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))

console.log(`\n Lista com nome de usuario numerados`)
apenasNomes.forEach((nome, index) => console.log(`\n${index}: ${nome}`))

//i =1
// console.log(i++)
// console.log(i)
// y = 10
// console.log(++y)

// Somando todas as idades.
console.log('\nSoma de todas as idades. ')
const somaIdades = usuario.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma das idades: ${somaIdades} `)

// Transformar elementos.
console.log('\nOperação de multiplicação - dobrar valor')
const numeros = [2, 4, 6, 8]
const numerosDobrados = numeros.map(numero => numero * 2)
console.log(`Numeros à dobrar: ${numeros}`)
console. log(`Numeros Dobrados: ${numerosDobrados}`)






