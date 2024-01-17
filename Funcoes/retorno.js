function soma (num1, num2){
    let somatorio = num1 + num2
    return somatorio
}

function soma2 (num1, num2){
    return num1 + num2
}

let resultado = soma(5, 10)
let resultado2 = soma2(5, 10)

console.log(`O resultado é ${resultado}`)
console.log(`O resultado é ${resultado2}`)

//Return preenche o resultado da função e pode chamar ele depois inserindo em uma variavel
//Pode preencher o Return com uma expressão desde que retorne apenas UMA informação, como um resultado, uma matriz, um vetor, etc