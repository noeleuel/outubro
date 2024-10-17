/// 02-operadores.js
/// operadores são usados para realizar operações com variaveis e valores

/// operadores  aritmetricos:

let soma = 10+5; /// soma
let subtração = 10-5; /// subtração
let multiplicação = 10 * 5; /// multiplicação
let divisão = 10 % 5; /// divisão

console.log("soma", soma)
console.log("subtração", subtração)
console.log("multiplicação", multiplicação)
console.log("divisão", divisão)
console.log("modulo/resto", modulo)


///operadores de comparação

/// Maior que
console.log(10 > 5); // true

/// Maior ou Igual
console.log(10 >= 10); // true

/// Menor que
console.log(10 < 5); // false

///igaul a
console.log(10 === 70); // false (igauldade)


/// operafores logicos

console.log(true && false); //// false E (logico)
console.log(true || false); //// false ( ou logico)
console.log(!true); //// false ( nãologico)


//// armazena a idade e vê se a pessoa tem carteira

let idadeS = 15
let temCarteira = false

//// verifique se o usuario tem mais de 18 anos E também se tem carteira. Se os dois forem TRUE 
/// retorna true, se não, retorna false.

let podeDirigir = ((idadeS >= 18) && (temCarteira));

console.log(podeDirigir);

