class formaBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    escrever() {
        console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }

    assar() {
        console.log(`Bolo de ${this.saborMassa} está assando`)
    }
}

//New é usado para criar um novo objeto da classe
let boloFesta = new formaBolo ("massa de baunilha", "recheio de leite ninho")
let boloPremium = new formaBolo ("Massa de red velvet", "recheio de baunilha")

//É possível chamar apenas uma informação/função da classe

console.log(boloFesta.saborRecheio)
boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()