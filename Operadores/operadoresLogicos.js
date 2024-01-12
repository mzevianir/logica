// AND (&&) - só pode seguir se tiver mais de 18 e visto verificado
let idade = 18
let vistoVerificado = true

console.log((idade >= 18) && (vistoVerificado === true))

let idade1 = 17
let vistoVerificado1 = true

console.log((idade1 >= 18) && (vistoVerificado1 === true))

// OR (||) - só pode sair se tiver sol ou com guarda chuva
let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")

console.log("Nosso personagem pode sair? " + podeSair)

// NOT (!) - nega uma afirmação / diferente
let tempo1 = "chuva"
let resultado = tempo1 !== "chuva"

console.log(resultado)