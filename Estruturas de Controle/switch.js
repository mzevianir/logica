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

// Definindo o nome e a quantidade de experiência (XP) do herói
var nomeHeroi = "Herói Exemplo";
var xpHeroi = 8000; // Altere o valor conforme necessário

// Inicializando a variável de nível do herói
var nivelHeroi;

// Utilizando a estrutura de switch para determinar o nível com base na quantidade de XP
switch (true) {
    case xpHeroi >= 10000:
        nivelHeroi = "Radiante";
        break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        nivelHeroi = "Imortal";
        break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        nivelHeroi = "Ascendente";
        break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        nivelHeroi = "Platina";
        break;
    case xpHeroi >= 5001 && xpHeroi <= 7000:
        nivelHeroi = "Ouro";
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivelHeroi = "Prata";
        break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        nivelHeroi = "Bronze";
        break;
    case xpHeroi <= 1000:
        nivelHeroi = "Ferro";
        break;
    default:
        nivelHeroi = "Nível não determinado";
}

// Exibindo a mensagem final
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
