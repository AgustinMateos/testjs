// let nombre=prompt("asginar nombre")
// let apellido=prompt("asignar apellido")
// let edad=prompt("asignar edad")

// const ciudad1="california"
// const ciudad2="new york"
// const ciudad3="buenas aires"
// const ciuad4="rosario"
// const ciudad5="la plata"

// let codigoCarnet="dd23c4f"
// let nombreCarnet="agustin mateos"
// let direccioncarnet="french 2756"
// let fechaNacimineto="04/11/95"
// let sexo="masculino"

// let carnet="codigo de carnet: "+codigoCarnet+"  "
// +nombreCarnet+direccioncarnet+fechaNacimineto+sexo;

// console.log(carnet)

// let nombrePadre=prompt("ingresar nombre padre");
// let nombreMadre=prompt("ingresar nombre madre");
// let nombreHijo=prompt("ingresar nombre hijo");
// let nombreHija=prompt("ingresar nombre hija");
// let nombreMascota=prompt("ingresar nombre mascota");

// let familia=nombrePadre+nombreMadre+nombreHija+nombreHijo+nombreMascota

// alert(familia)

// let montoProducto=prompt("ingresar precio producto")

// let montoProducto20=(montoProducto * 20)/100
// let montoProducto30=(montoProducto *30)/100

// alert("el monto de tu producto es: "+montoProducto+""+"el precio con 20 de descuento quedaria en: "+montoProducto20)

// let entrada=prompt("ingresar nombre")
// let nombre="agustin"

// if (nombre== entrada){
//     alert ("soy agustin perras")
// }else{alert("tu eres quien deberia ser")}


// let letra=prompt("dime una letra")

// if ((letra=="y")||(letra=="Y") ){
// alert("correcto")
// }else{alert("incorrecto")}

// let ingresarNumero=prompt("ingresar numero del 1 al 4")

//  if (ingresarNumero==1) {
//     alert("eres bart")
//  }else if(ingresarNumero==2){
//     alert("eres flanders")
//  }else if(ingresarNumero==3){
//     alert("eres agustin")
//  }else if(ingresarNumero==4){
//     alert("eres carmen")
//  }
//  else{"eres lautaro"}


// let ingresarNumero=prompt("ingresar presupuesto ")

//  if ((ingresarNumero >0)&(ingresarNumero  <=1000)) {
//     alert("presupuesto bajo")
//  }else if((ingresarNumero >=1001)&(ingresarNumero<=3000)){
//     alert("presupuesto medio")
//  }else if(ingresarNumero>=3000){
//     alert("presupuesto alto")}
//  else{"eres lautaro"}


// let ingresarProducto1=prompt("ingresar producto1")
// let ingresarProducto2=prompt("ingresar producto2")
// let ingresarProducto3=prompt("ingresar producto3")
// let ingresarProducto4=prompt("ingresar producto4")
// let ingresarProducto5=prompt("ingresar producto5")

// if ((ingresarProducto1 != "")&&(ingresarProducto2!="")&&(ingresarProducto3!="")&&(ingresarProducto4!="")&&(ingresarProducto5)){
//     let order=ingresarProducto1 + ingresarProducto2 + ingresarProducto3 + ingresarProducto4 + ingresarProducto5
//     alert(order)
// }else{alert("error en la carga de datos")}

// for (let i=1; i<=10;i++){
//     let texto=prompt("ingresar texto")
//     let numero=prompt('ingresar numero')
//     if (numero == 5){
//         break
//     }
// }

// let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
// let texto    = prompt('INGRESAR TEXTO A REPETIR');
// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }


// let lados = prompt('INGRESAR CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {
//         break;
//     }
//     alert("lado");
// }


// let alumnos = '';
// for (let index = 0; index < 10; index++) {
//     alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
// }
// alert(alumnos);

// let entrada    = prompt("INGRESAR NOMBRE");
// let ingresados = '';
// while (entrada != 'Voldemort') {
//     ingresados += entrada +"\n";
//     entrada     = prompt("INGRESAR NOMBRE");
// }
// // alert(ingresados);
// let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// while (entrada != 'ESC') {
//     switch (entrada) {
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo");
//             break;
//         default:
//             alert("Error");
//             break;
//     }
//     let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// while (entrada != 'ESC') {
//     switch (entrada) {
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo");
//             break;
//         default:
//             alert("Error");
//             break;
//     }
//     entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// }

// }
  
// function valor1() {
//      return prompt("ingresar valor")
// }
//  function procesamiento(valor){
//  return "el valor es:" + valor}

//  function salida(valor){alert (valor)}
 

//  salida(procesamiento(valor1()))


// Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
// Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.


// function redondeo(valor){
//     return Math.round(valor)//creamos la funcion de redondeo
// }
// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("INGRESAR NUMERO"); //se crea el bucle que repetira la solicitud las veces indicadas y devuelve el valor redondado
//     alert(redondeo(entrada));
// }

// Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
// Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

// function impuesto(precio, porcentaje){
//     return precio + ((precio * porcentaje)/100)
// }
// for (let index = 0; index < 5; index++) {
//     let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO"))
//   ,parseFloat(prompt("INGRESAR %")));
//     alert(resultado);
// }



// Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
// Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
// Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.


// const COTIZACION_DOLAR = 150;
// const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
// const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
// let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
// let valor = prompt("VALOR");
// switch (seleccion) {
//     case "1":
//         alert(cotizarPesos(valor));
//         break;
//     case "2":
//         alert(cotizarDolar(valor));
//         break;
//     default:
//         break;
// }
// Codificar una función con la siguiente cabecera: validacion(cadena). 
// En ella, se retorna un valor booleano, el cual es true si el parámetro
//  no es un cadena vacía. Caso contrario, se retorna false. Luego invocar 
//  la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando
//   en cada ciclo una cadena a validar.

// function validacion(cadena){
//     return cadena != '';
// }

// let entrada =  prompt("INGRESAR CADENA");

// while (entrada != 'ESC') {
//     alert(validacion(entrada));
//     entrada = prompt("INGRESAR CADENA");
// }

// 5)))
// Declarar un clase Tienda que permita registrar:
// Nombre de la tienda.
// Dirección de la tienda.
// Propietario de la tienda.
// Rubro de la tienda.
// Luego invocar al menos tres (3) objetos usando esta clase.

// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
        
//     }
   
// }


// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacen");
// const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel","Panaderia");
// const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns","Shopping");
// tienda1.estaAbierto()
// console.log(tienda1);
// console.log(tienda2);
// console.log(tienda3);

// Solicitar al usuario el registro de cinco (5) tiendas.
// Emplear la clase Tienda de la actividad 1, para instanciar
//  los objetos en función de las entradas capturadas. Generar
//   una única salida compuesta por la información de los objetos instanciados.

// let ingresados = '';
// for (let index = 0; index < 5; index++) {
//     let tienda =  new Tienda(prompt("NOMBRE"), 
//                              prompt("DIRECCION"), 
//                              prompt("PROPIETARIO"),
//                              prompt("RUBRO"));

//     ingresados+= "Tienda: "+tienda.nombre+" "+
//              "Direccion: "+tienda.direccion+" "+
//              "Propitario: "+tienda.propietario+" "+
//              "rubro: "+tienda.rubro+"\n";
// }
// alert(ingresados);

// Declarar un método para la clase Tienda con la siguiente
//  cabecera estaAbierto(hora). Este retorna true si la hora 
//  enviada está entre las 08 y 12, o entre las 15 y 19. 
//  Caso contrario, se retorna false.
// Luego invocar al menos un (1) objeto usando esta clase, 
// y solicitar al usuario tres (3) horas. Informar por 
// alerta si la tienda está abierta, en función de la hora ingresada

// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//     estaAbierto(hora){
//         if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
//             return true;
//         }
//         return false;
//     }
// }
// const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
// for (let index = 0; index < 3 ; index++) {
//     let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
//     if(tienda4.estaAbierto(entrada)){
//         alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
//     }else{
//         alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
//     }
// }

// Declarar un método para la clase Tienda con la siguiente cabecera 
// esPropietario(nombre). Se retorna true si el nombre enviado 
// corresponde al propietario de la tienda.Caso contrario, se retorna false.
// Luego, invocar al menos tres(3) objetos usando esta clase 
// y solicitar al usuario cinco(5) nombres. Informar por alerta
//  si los nombres pertenecen a algún dueño de tienda.

// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//       esPropietario(nombre){
//         return this.propietario == nombre;
//     }
// }
// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
// const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
// const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");
// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
//     if (tienda1.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
//     }
//     if (tienda2.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
//     }
//     if (tienda3.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
//     }
// }

// Declarar una clase Cliente que permita:
// Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
// Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto,
//  siempre que este parámetro sea menor al valor enviado, y mayor que cero.
// Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco
//  (5) números. Informar por alerta si cada uno de los clientes cuenta con el presupuesto 
//  suficiente para realizar una transferencia de igual monto al ingresado.

// class Cliente{
//     constructor(nombre,presupuesto,tarjeta,telefono){
//         this.nombre = nombre;
//         this.presupuesto = parseFloat(presupuesto);
//         this.tarjeta = tarjeta;
//         this.telefono = telefono;
//     }

//     transferirDinero(valor){
//         if((this.presupuesto > 0)&&(valor < this.presupuesto)){
//             this.presupuesto -= valor;
//             return valor
//         }else{
//             return 0;
//         }
//     }
// }
// const cliente1 = new Cliente("Homero", 2000, true, "1234560");
// const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
// const cliente3 = new Cliente("Barny", "50", false, "231234560");
// for (let index = 0; index < 5; index++) {
//     let entrada = parseFloat(prompt("INGRESAR MONTO"));
//     if (cliente1.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
//     if (cliente2.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
//     if (cliente3.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
//     }else{alert("nadie puede")}
// }

// ej1 function entrada(){
//    return prompt("solicitar usuario")
   
// }

// function procesamiento(valor){
//     return "la entrada es " + valor
// }

// function salida(valor){
//     alert(valor)
// }

// salida(procesamiento(entrada()))

// Solicitar al usuario un (1) un número y un (1) texto. Efectuar una 
// salida por alerta con el mensaje ingresado por cada repetición, hasta
//  alcanzar el valor señalado por el usuario.


// let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
// let texto    = prompt('INGRESAR TEXTO A REPETIR');
// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }

// Solicitar al usuario un (1) un número. Emplear este valor para determinar
//  la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje 
//  “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor 
//  que cuatro (4), cancelar el ciclo.

// let solicitar=prompt("solicitar numero")

// for (let index = 0; index <= solicitar; index++) {
//      if(solicitar<=4){alert("lado"+index)}
//      else{alert("supero la cantidad maxima")}
// }


//otra forma
// let lados = prompt('INGRESAR CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {
//         break;
//     }
//     alert("lado");
// }

// Solicitar al usuario la carga de diez (10) 
// alumnos de forma consecutiva.
// Luego realizar un única salida por alerta,
//  con el listado de alumnos registrados.

// let alumnos = '';
// for (let index = 0; index < 10; index++) {
//     alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
// }
// alert(alumnos);

// Solicitar al usuario la carga de nombres de forma consecutiva, 
//  hasta que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, con todos los 
// nombres ingresados.


// let entrada=prompt("ingresar nombres")
// let ingresados=""

// while(entrada!="voldemort"){
//     entrada+=prompt("ingresar nombres")
//  entrada=prompt("ingresar nombres")
// }

// alert(entrada)

// Solicitar al usuario la carga de nombres de forma consecutiva, hasta
//  que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, con todos los nombres ingresados.


// let ingresarNombre=prompt("ingresar nombre")
// let ingresados=""
// do {
//     ingresarNombre=prompt("ingresar nombre")
//     ingresados+=ingresarNombre
// } while (ingresarNombre!="voldemort");

// alert(ingresados )


// Solicitar al usuario un (1) número de forma consecutiva, hasta que se
//  ingrese “ESC”. Generar una única salida compuesta por los siguientes
//   productos, según el valor ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
}

