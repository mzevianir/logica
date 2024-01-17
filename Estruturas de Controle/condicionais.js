//IF - Se
let ligado = false

if(ligado == true){
    console.log("executou comando")
}

let possuiOvos = false
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
} 
//ELSE - Se não
else {
    console.log ("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}
    console.log("itens comprados: " + itensComprados)

//ELSE IF - 

let nivelDeFome = 1

if(nivelDeFome === 1){
    console.log("pouca fome")
}else if (nivelDeFome === 2){
    console.log("muita fome")
}