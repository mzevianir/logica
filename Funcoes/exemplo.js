function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

let userName = getFirstName("Mateus Zeviani Rodrigues")

console.log(`Seja bem vindo ${userName}`)


//Split é uma função pré definida no JS que divide a informação de acordo com o paramento, no caso acima, o espaço
//E transforma em um vetor, e seleciona a informação que quer puxar em [ ], no caso acima, a primeira então 0