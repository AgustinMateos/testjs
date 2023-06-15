// function porCadaUno(arr,fn){
//     for(const el of arr){
//         fn(el)
//     }

// }

// const numeros=[1,2,3,4,5]
// porCadaUno(numeros,console.log)

// function acumulador(num){
//      total+=num
// }
// let total=0

// porCadaUno(numeros,acumulador)

// console.log(total)
function acumulador(num){
    total+=num}
const numeros=[1,2,3,4,5,6]
const total=numeros.reduce((acumulador,elemento)=>acumulador + elemento,0)

console.log(total)