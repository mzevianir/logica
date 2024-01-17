function torrar (pao, nome ="Cliente", valor) {
    console.log("torrando torrada feita com " + pao)
    console.log("ela é um pedido do " + nome)
    console.log("O valor é " + valor)
}

torrar("pao de forma", "Gabriel", 10.90)

function torrar (pao, nome ="Cliente", valor) {
    console.log(`torrando torrada feita com ${pao} `)
    console.log(`ela é um pedido do ${nome} `)
    console.log(`O valor é ${valor}`)
}

torrar("pao de forma", "Gabriel", 10.90)

//A interpolação de strings é feito com a cráse (``) e
//Todo texto que estiver iniciando com ${variavel} vai substituir com o resultado informado