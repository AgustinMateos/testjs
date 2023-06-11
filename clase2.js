// let iNombre=prompt("ingresar nombre")
// let iApellido=prompt("ingresar apellido")
// let iEdad=prompt("ingresar edad")

// if ((iNombre != "")&&(iEdad > 18)){
// alert("bienvenido" +iNombre+ iApellido)
// console.log("sss")
// }
// else{alert(iNombre + "es menor de edad, no puede entrar")}

// for (let i=1; i<=10;i++){if(i==5){break}alert(i)}
 

// let entrada=prompt("ingresar nombre");

// while (entrada != "ESC"){
//     alert(entrada)
//     entrada=prompt('ingresar otro dato')
// }
// let repetir = false;
// do{
// console.log("¡Solo una vez!");
// }while(repetir)

let numero = 2;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));
