//switch - testa a condição com vários blocos, colocar:, usado quando possui mais de 3 decisões
//case - define os blocos a serem testados, colocar :, pode usar mais de um case para o mesmo bloco
//break - para de executar na hora que acha o resultado certo
//default - se não acha o bloco certo com a condição, da uma resposta padrão

let fruta = "melão"

switch(fruta){
    case "laranja":
    console.log("suco de laranja")
    break

    case "banana":
    case "melão":
    console.log("vitamina de " + fruta)
    break

    case "maça":
    console.log("suco de maça")
    break

    default:
    console.log("suco de genérico")
}