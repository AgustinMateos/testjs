// let miLista=[{nombre:"ada",edad:"ada", precio:20},
// {nombre:"ada",edad:"ada", precio:20},
// {nombre:"ada",edad:"ada", precio:20}]

// function lista(arr,fn){
//     if(miLista!=""){
//         for(const el of arr){
//             fn(el)
//         }
//     }else{return console.log("lista vacia")}
// }
// lista(miLista,console.log)

// class Contador{
//     constructor(nombre,numero){
//         this.nombre=nombre;
//         this.numero=numero;
       
//     }
//     static cantidad=0
//     sumar=(num)=>{
//         cantidad+=num
//     }
//     respon=(nombre)=>{
//         if (nombre==this.nombre){
//            return "hola"
//         }
//     }

// }
// const resp1=new Contador("juan",2)

// resp1.sumar(2)


class Pokemon {
    constructor(nombre, vidas, ataque) {
        this.nombre = nombre
        this.vidas = vidas 
        this.ataque = ataque 
        this.nivel = 1
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y te estoy saludando`)
    }

}

class Fuego extends Pokemon {
    constructor(nombre, vidas, ataque, ataqueLlamarada) {
        super(nombre, vidas, ataque)
        this.ataqueLlamarada = ataqueLlamarada
    }

    llamarada() {
        console.log(`El pokemon ${this.nombre} lanzo llamarada con daño de ${this.ataqueLlamarada}`)
    }
}

class Electrico extends Pokemon {
    constructor(nombre, vidas, ataque, ataqueImpactrueno) {
        super(nombre, vidas, ataque)
        this.ataqueImpactrueno = ataqueImpactrueno
    }

    saludar() {
        console.log(`Hola, me estoy despidiendo`)
    }

    impactrueno() {
        console.log(`El pokemon ${this.nombre} lanzo impactrueno con daño de ${this.ataqueImpactrueno}`)
    }
}

const pikachu1 = new Electrico("Pika pika", 20, 5, 10)
const charmander1 = new Fuego("Fueguito", 17, 4, 9)
console.log(pikachu1)
console.log(charmander1)

//pikachu1.saludar()
//pikachu1.impactrueno()

//pikachu1 = Object.freeze(pikachu1)
/*
pikachu1.nombre = "La ratita"
pikachu1.vidas = Object.freeze(pikachu1.vidas)
pikachu1.saludar = null
pikachu1.vidas = 50
//console.log(pikachu1)
console.log(pikachu1.saludar())

console.log(pikachu1)*/