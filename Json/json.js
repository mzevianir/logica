//Com JSON - JavaScript Object Notation
//Chave e valor com o objetivo de transferir dados
//Geralmente usado para comunicar entre sistemas/aplicação
 
let invoice = {
    nameJ:"Mateus",
    ageJ:24,
    productsJ: {
        0: ["mouse ultra, 29.90"],
        1: ["teclado mecanico, 129.99"],
        2: ["monitor foda, 899.99"],
    }
}
console.log(invoice)
console.log(invoice.nameJ)
console.log(invoice.ageJ)
console.log(invoice.productsJ)
console.log(invoice.productsJ[2])
// É possível chamar uma função sem criar todas as variaveis depois de feito o JSON por exemplo: generateInvoice(invoice)

//Sem JSON - JavaScript Object Notation
let name = "Mateus"
let age = 24
let products = ["mouse ultra", "teclado mecanico", "monitor foda"]
let productsValues = [29.90, 129.99, 899.99]

function generateInvoice(name, products, productsValues, age){
    console.log("O comprador é: " + name)
    console.log("A idade é: " + age)
    console.log("O produto é: " + products [0])
    console.log("O valor é: " + productsValues [0])
}

generateInvoice(name, products, productsValues, age)

