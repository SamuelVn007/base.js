//.var ->criando ema variável

//var altura = 5;
//var comprimento = 8;

//var area = altura * comprimento;
//console.log(area);

// let ->criando ema variável(forma mais atualizada de criar uma var)

let altura = 5;
let comprimento = 8;
let forma = "retângulo";
let area;

if (forma ==="retâgulo"){
    area = altura * comprimento
}
else if(forma === "triangulo"){

    area = (altura * comprimento)/2
}
else {
    console.log("deveria ser uma form")
}
 console.log(area);

//const -> ultilizada para criar "variaveis" que são fixas, ou, seja não se altera 
//condições booleanas(truly ou falsy)
// 0 = false
// 1 = true

const usuariologado = true;
const contapaga = false;

console.log(0 === false);// true
console.log(contapaga == 0);// true
console.log(contapaga === 0);// false
console.log( "" == false);// true
console.log(1 == true);// true

// Nulo e indefinido
// nulo -> vazio ou nada

let gustavo;
let gabriel = null;
let numero = 3;
let texto = "eu gosto de sorvete <3"

// consutando tipo de variaveis;
console.log( typeof gustavo)
console.log( typeof gabriel)
console.log( typeof numero)
console.log( typeof texto)

// conversao de variavel

const numberNumber = 657;
const stringNumero = "657"

console.log( numberNumber == stringNumero) // compara  apenas o valor numerico
console.log( numberNumber === stringNumero) // compara o tipo de variaveis
console.log(numberNumber + stringNumero) // concatenação
console.log(numberNumber +numberNumber(stringNumero))//sama  de numero(string convertida em number)