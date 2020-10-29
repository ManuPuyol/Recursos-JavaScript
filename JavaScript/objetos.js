let miAuto ={
    marca:"Toyota",
    modelo:"Corolla",
    annio:2020,

    //metodos de objetos
    detalleDelAuto:function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//como llamamos a una funcion se le pone ();
//miAuto.detalleDelAuto();

function auto(marca,modelo,annio){

    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;

}
//otra manera de crear metodos

auto.prototype.acelerar = function (){
    console.log("estoy acelerando")
}
var ferrari= new auto("Ferrari","Rojo","1293");

ferrari.acelerar()

auto.prototype.esViejo=function(){
    return this.annio<2000
}
function Desarrollador(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}


Desarrollador.prototype.saludar= function(){

    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

}
//retornar un objeto nuevo BUENA PRACTICA
function sumarAño(coche){

   return {
       ...coche,
       annio:coche.annio + 1
   }

}
console.log(sumarAño(miAuto))
console.log(miAuto)

