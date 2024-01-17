function injetarPao(){
    console.log("preparando para injetar o pao")
    console.log("finalizado")
    torrar()
}

function torrar () {
    console.log("torrando pão")
}

function torrada (){
    console.log("sua torrada está pronta")
}

//Função principal que chama todas as funções de uma vez\
function main (){
    injetarPao ()
    torrar ()
    torrada ()
}

main ()