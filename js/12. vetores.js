//Criando um vetor 

const frutas = ['Maçãs', 'Banana', 'laranja']
console.log(frutas)

//Acessar alimentos especificos
console.log(frutas[0])
console.log(frutas[0])

//adicionando elementos
frutas.push('uvas')
console.log(frutas)

//remover elementos
frutas.pop()//remove o ultimo  elemento.
console.log(frutas) 

frutas.splice(1,1)//remove apenas o segundo elemento
console.log(frutas)

//percorrendo o vetor
frutas.forEach((frutas, index) => {
    console.log(`${index}: ${frutas} `)
})

