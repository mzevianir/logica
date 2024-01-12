//FOR - para

for (let contador = 0; contador < 4; contador++){
    console.log("Aumentando o contador de 1 em 1: ")
    console.log(contador)
}

for (let i = 0; i < 4; i++){
    console.log("Aumentando o contador de 1 em 1: ")
    console.log(i)
}

let pontosVida = 0

for( let i = 0; i < 10 ; i++){
    pontosVida++
    console.log("pontos de vida aumentou em 1 e o total é " + pontosVida)
}

//WHILE - ENQUANTO
//Primeiro verifica depois faz

let contador = 0

while(contador < 3){
    console.log("olá")
    contador++
}

let i = 0
while(i < 3){
    console.log("olá")
    i++
}

//DO WHILE
//Primeiro faz depois verifica

let contador1 = 0
do{
    console.log("oi")
    contador1++
} while (contador1 < 3)