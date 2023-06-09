let iNombre=prompt("ingresar nombre")
let iApellido=prompt("ingresar apellido")
let iEdad=prompt("ingresar edad")

if ((iNombre != "")&&(iEdad > 18)){
alert("bienvenido" +iNombre+ iApellido)
console.log("sss")
}
else{alert(iNombre + "es menor de edad, no puede entrar")}