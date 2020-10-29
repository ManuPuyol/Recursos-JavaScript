//funciones declarativas

function miFuncion(){
    return 3;
}
miFuncion();


function saludaEstudiantes(estudiante){
    console.log(estudiante)
}
saludaEstudiantes("Manuel")

//concatenar variable + string

function saludarEstudiantes2(estudiante){
    console.log(`Hola ${estudiante}`);
}
saludarEstudiantes2("Manuel")

function sumar(a,b){
    return a + b;
}
console.log(sumar(1,2));

//funciones de expresión o anónimas

let miFuncion =function(a,b){
    return a+b;
}

//arrow function , podemos omitir los parentesis si es un solo parametro el que le entra , si una funcion solo tiene un return podemos quitarlo y los corchetes tambien
let miFuncion =(a,b)=>a+b >=5;
//desestructurar el parametro del objeto
let miFuncion=({edad})=>edad>=18;
//combina condicionales terniarios y arrow function
const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')