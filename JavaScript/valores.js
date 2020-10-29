//numeros
40

//String

"Manuel Puyol"

//Boolean

true
false

//sin definir o vacìos
null 
undefined

//Array
[1,2,3,4]

//objeto
{nombre:"manuel"}

//para saber el tipo de la variable
typeof 40


//ultimo tipo de dato ECMASCRIPT6+
/*

++Los Symbols son identificadores, como su nombre lo indica, servirían para algo como las ID en HTML 
o las llaves primarias en una base de datos debido a sus propiedades de “únicos e inmutables”.

Normalmente siendo declarados como variables podríamos cambiarle su valor volviendo a 
reasignar la variable y nos damos cuenta que para este tipo de trabajos javascript ya tiene las constantes,
sin embargo cuando le asignados un objeto a una constante podemos cambiar su contenido,
ya que cuando modificamos un objeto no reasignamos.

*/
var symbolOne = Symbol()
var symbolTwo = Symbol()
console.log(symbolOne === symbolTwo) // Devolveraá false