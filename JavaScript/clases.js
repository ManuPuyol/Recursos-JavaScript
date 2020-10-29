class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura


    }

    saludar(){
        console.log("hola k ase")
    }
    soyAlto(){
        return this.altura>1.8
    }
}
//HERENCIA
class Desarrollador extends Persona{
    
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    
    }

    saludar(){
        console.log("hola k ase")

    }
}