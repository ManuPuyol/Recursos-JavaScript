//funciones pre ecmascript 6

function newFunction(name,age,country){
    var name= name || 'oscar';
    var age = age || 32;
    var country = country || 'ESP'

    console.log(name,age,country)
}


//es6 puedes decirle directamente los parametros o en su defecto cambiarlos 

function newFunction2(name = 'oscar',age =32 ,country='ESP'){

        console.log(name,age,country);

}






