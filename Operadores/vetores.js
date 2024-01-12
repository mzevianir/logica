let pokemon = ["Pikachu" , "Charmander" , "Bulbasaur"]
let timePokemon = [
    ["pikachu", "M", "level 1"],
    ["charmander", "F", "level 4"]
]

console.log(pokemon[0])
console.log(timePokemon[1])
//O primeiro [1] chama a coluna e o segundo [0] chama a linha
//Por exemplo, a 2° coluna que é do charmander, a 1° informação da linha
console.log("O pokemon " + timePokemon [1][0] + " é do sexo " + timePokemon [1][1])