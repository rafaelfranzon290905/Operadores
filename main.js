const primeiroValor = 10
const segundoValor = 25

// const resultado = primeiroValor / segundoValor 

// console.log(resultado)

// const soma = 3 + 4
// let multiplica = 3 * 5 / 2
// let sub = 4 - 5
// sub *= -1
// let resto = 234 % 5

// console.log(soma, multiplica, sub, resto)

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))

console.log("iguais",numero1 === numero2)
console.log("diferentes",numero1 !== numero2)
console.log("maior",numero1 > numero2)
console.log("menor",numero1 < numero2)


let nome = prompt("Seu nome")
let anoNascimento = prompt("Ano de nascimento")
let anoAtual = prompt("O ano atual")


console.log("nome:", nome)
console.log("idade:", anoAtual - anoNascimento)
console.log("maior de idade", anoAtual - anoNascimento >= 18)
console.log("Em 2050", 2050 - anoNascimento)
console.log(new Date())


// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// primeiro false pq pede && e, enquanto a primeira é true, a segunda não é.
// segundo Também é false pois segunda continua falsa.
// Terceiro true pois pede o contrário do resultado antigo q é true e o or dos dois primeiros, que tbm dará true
// Quarto dará boolean


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Ele retornará os números colados um ao outro pois o default do prompt é string, que não funciona como número

// Como solução ele deve adicionar o modificador Number() antes do prompt


// 1. Faça um programa que:
    
//     a) Pergunte a idade do usuário
    
//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
//     c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
//     d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo)

let idade = Number(prompt("Digite sua idade"))
let idadeAmiga = Number(prompt("Qual a idade da sua melhor amiga"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmiga)
console.log("A diferena de idade é", idade - idadeAmiga)

// 2. Faça um programa que:
    
//     a) Peça ao usuário que insira um número **par**
    
//     b) Imprima na console **o resto da divisão** desse número por 2.
    
//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

let par = Number(prompt("Insira um número par"))
console.log(par % 2)
// O padrão é que, em todos os casos, o resultado será 0
// Caso o usário insira um número ímpar, o resto da divisão adequada será colocada, no caso, esse resto sempre será 1.

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
    
//     b) A idade do usuário em dias
    
//     c) A idade do usuário em horas

let idadeAnos = Number(prompt("Digite sua idade"))

console.log(idadeAnos * 12)
console.log(idadeAnos * 12 * 365)
console.log(idadeAnos *12 * 365 * 24)

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

let num1 = Number(prompt("Numero"))
let num2 = Number(prompt("Numero 2"))

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 == 0)
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 == 0)

