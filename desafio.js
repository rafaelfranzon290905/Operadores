// 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
//     - Graus Fahrenheit(°F) para Kelvin(K)
  
//         (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

//     - Graus Celsius(°C) para Graus Fahrenheit (°C)

//         (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

//     a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também. 

let kelvin = (77 - 32)*(59) + 273.15
console.log(kelvin)

//     b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também  

let fahrenheit = (80)*(95) + 32
console.log(fahrenheit)

//     c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também 

fahrenheit = (30)*(95) + 32
console.log(fahrenheit)
kelvin = (fahrenheit - 32)*(59)+273.15
console.log(kelvin)

//     d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let grau = Number(prompt("Digite o grau"))

fahrenheit = (grau)*(95) + 32
console.log(fahrenheit)
kelvin = (fahrenheit - 32)*(59)+273.15
console.log(kelvin)


// 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.


//     a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

console.log(280*0.05)

//     b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

console.log(280*0.05-(280*0.05*0.15))



// 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
    
//     a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//     `20lb equivalem a X kg`
    
let libraQuilo = 20 * 0.453592
console.log(`20lb equivalem a ${libraQuilo} kg`)

//     b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//     `10.5oz equivalem a X kg`
    
let ozKg = 10.5 * 0.0283495
console.log(`10.5oz equivalem a ${ozKg} kg`)

//     c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//     `100mi equivalem a X m`
    
let miM = 100 * 1609.34
console.log(`100mi equivalem a ${miM} m`)

//     d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//     `50ft equivalem a X m`
   
let peM = 50 * 0.3048
console.log(`50ft equivalem a ${peM} m`)

//     e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//     `103.56gal equivalem a X l`
   
let galL = 103.56 * 3.78541
console.log(`103.56gal equivalem a ${galL} L`)

//     f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//     `450 xic equivalem a X l`
    
let xicL = 450 * 0.284131
console.log(`450 xic equivalem a ${xicL} L`)

//     g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

libraQuilo = Number(prompt("digita número")) * 0.453592
console.log(`equivalem a ${libraQuilo} kg`)

ozKg = Number(prompt("digita número")) * 0.0283495
console.log(`Equivalem a ${ozKg} kg`)

miM = Number(prompt("digita número")) * 1609.34
console.log(`Equivalem a ${miM} m`)

peM = Number(prompt("digita número")) * 0.3048
console.log(`50ft equivalem a ${peM} m`)

galL = Number(prompt("digita número")) * 3.78541
console.log(`103.56gal equivalem a ${galL} L`)

xicL = Number(prompt("digita número")) * 0.284131
console.log(`450 xic equivalem a ${xicL} L`)