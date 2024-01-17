function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}

let userName = getFirstName("Mateus Zeviani Rodrigues", " ")
console.log(`Seja bem vindo ${userName}`)

userName = getFirstName("Mateus-Zeviani-Rodrigues", "-")
console.log(`Seja bem vindo ${userName}`)

//splitChar é uma função pré definida no JS que divide a informação de acordo com o paramento, no caso acima, o espaço e o - 
//E transforma em um vetor, e seleciona a informação que quer puxar em [ ], no caso acima, a primeira então 0
//Pode usar a mesma variavel e definir um novo valor sem informar let novamente