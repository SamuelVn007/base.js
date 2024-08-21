// funções!!!!!!!!!

let x = "nada";
console.log(x)
x = "Oi"
y = "Tchau"

// Declaração de função

// 1) Declara a função

function imprimeTexto (texto) {
    console.log(texto)
}

// 2) Chamar/Executar a função

imprimeTexto (x)
imprimeTexto ("Eu sou um aluno")

function soma(){
    return 7623737 * 73763
}

console.log(soma());
imprimeTexto(soma())
imprimeTexto(somaDeNumeros(4, 7))
imprimeTexto(somaDeNumeros(24, 11))

function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

imprimeTexto(nomeIdade("Samuel", 17))
imprimeTexto(nomeIdade(17, "Superior a sua sendo que a massa do sol é o dobro do centésimo termo elevado a trinta"))

imprimeTexto(multiplicacao())
//Você pode definir um parâmetro inicial para sua função
function multiplicacao (numero3 = 55, numero4 = 5){
    return(numero4 * numero3)
}
imprimeTexto(multiplicacao(somaDeNumeros(3,4), somaDeNumeros(5,10)))