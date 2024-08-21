//Erros comuns

// const numero = ( 1° erro const não declara )

const minhaVar = "oi"  // 2°Erro(Não declarar uma variavel e chamar)
console.log(minhaVar)  // Exemplo: minhaVar

console.error("Isso está errado")  // 3°erro: ("Você pode declara um erro com o console.erro")

// Conditional abreviada if(){}

let idadeMinima = 18
let idadeCliente = 16

if (idadeCliente >= idadeMinima){
    console.log("Cerveja")
} else {
    console.log("Nescau")
}

//Valor ternário
console.log(idadeCliente >= idadeMinima ? "cerveja" : "Nescau")
// modo ternário, utilizando a estrutura _____>=______?______:______
// modo ternário, utilizando a estrutura _____<=______?______:______
// modo ternário, utilizando a estrutura _____==______?______:______

// Tamplate string

const nome = "Samuel"
const idade = 17;
const cidadeNatal = "Foz do Iguaçu"

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade " + cidadeNatal;
console.log (apresentacao);


const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade}, eu nasci na cidade de ${cidadeNatal}`
console.log (apresentacao2)