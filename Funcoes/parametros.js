function torrar (pao, nome) {
    console.log("torrando torrada feita com " + pao)
    console.log("ela é um pedido do " + nome)
}

torrar("pao de forma", "Mateus")

function torrar (pao, valor,  nome ="Cliente") {
    console.log("torrando torrada feita com " + pao)
    console.log("ela é um pedido do " + nome)
    console.log("O valor é " + valor)
}

torrar("pao de forma", 10.90)

function torrar (pao, nome ="Cliente", valor) {
    console.log("torrando torrada feita com " + pao)
    console.log("ela é um pedido do " + nome)
    console.log("O valor é " + valor)
}

torrar("pao de forma", "Gabriel", 10.90)


//Definiu o resultado de pao dentro da função com a informação inserida depois
//A variavel só existe dentro das chaves da função
//É possível definir um resultado padrão para caso não for informado
//Se informado e tiver uma resposta padrão, prevalece a informação informada
//Caso uma das informações não for obrigatória porque possui a informação padrão, deixar por ultimo 
//Para que as outras possam ser preenchidas