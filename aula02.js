// var = criando variavel

// altura = 10;
// largura = 5;
// var area = altura * largura;
// console.log(area)

let altura = 8
let largura = 10
let area;
let forma = "Retângulo"

if (forma === "Retângulo"){
    area = altura * largura
}
else{
    area = (altura * largura) / 2
}

console.log(area)

// const -> Utilizada para criar "VAriávei" que são fixas, que não se altera
// Condições booleanas (Truly ou falsy)

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false)
console.log(contaPaga == 0)
console.log(contaPaga === 0)
