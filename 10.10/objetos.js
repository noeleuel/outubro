/// Objetos são coleções de propriedades, que são pares de chave e valor.

/// Declaração de um objeto:
let pessoa = {
    nome: "Melissa",
    sobrenome: "Correa",
    idade: 15,
    altura: 1.58,
    dormir: function(){
        console.log(`${pessoa.dormir} esta dormindo`)
    }

}

/// declaração de um objeto

console.log(pessoa)
console.log(pessoa.nome, pessoa.sobrenome)
console.log(pessoa["nome"], pessoa["sobrenome"])

/// assim eu altero o valor de uma propiedade que está dentro de um objeto
pessoa.nome = "jubscleison"
console.log(pessoa.nome)
pessoa.idade = 99
console.log(pessoa.idade)

/// assim eu adicono uma nova propiedade
pessoa.peso = 99
console.log(pessoa)
pessoa.dormir()


/// criar um objeto que sera um carro, com tudo de um carro, função chamada andar e uma de buzinar, deois trocar para outro modelo