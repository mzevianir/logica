//Class guarda funções além de dados e pode ter comportamento
//Constructor é uma função
//This é esse/essa referindo a classe, o primeiro saborMassa é uma variavel e a segunda é referente a função
//This seria um let, por exemplo, this.saborMassa = let saborMassa
//New é uma nova instância, cria um novo objeto de uma determinada classe

class formaBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }
}

//Objeto é quando usa de fato a classe, instância a classe
let boloFesta = new formaBolo ("massa de baunilha", "recheio de leite ninho")

console.log(boloFesta)