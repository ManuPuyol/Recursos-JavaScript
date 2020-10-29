var frutas=["Manzana","Platano","Cereza","Fresa"];
console.log(frutas.length)
console.log(frutas[0])

//añadir al final items al array

var masFrutas=frutas.push("Uvas");

//eliminar último elemento elemento
var ultimo=frutas.pop("Uvas");

//añadir al inicio
var nueva_longitud=frutas.unshift("Melocoton");

//borrar un elemento concreto

var borrarFruta=frutas.shift("Platano");

var posicion = frutas.indexOf("Cereza");
console.log(posicion)
console.log(frutas.length)
console.log(frutas[0])

//array de arrays o array de objetos
//filtros , te mete en un nuevo array los juegos filtrados
var juegos=[
    {nombre:"DarkSouls",costo:60},
    {nombre:"Pokemon",costo:35},
    {nombre:"Genshin Impact",costo:0},
    {nombre:"Pokemon",costo:19}
];

var juegosFiltrados= juegos.filter(function(juego){
    return juego.costo<=50;
});

console.log(juegosFiltrados)
//El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.
var nombreJuegos = juegos.map(function(juegos){
    return juegos.nombre;
});
console.log(nombreJuegos)

//find en array

var encuentraJuego = juegos.find(function(juegos){
    return juegos.nombre ==="DarkSouls"
});
console.log(encuentraJuego)

//for each (este no genera un nuevo array)

juegos.forEach(function(juego){
    console.log(juego.nombre)
});

//some , parecido al for each pero crea un nuevo array y devuelve un booleano true o false

var juegosBaratos =juegos.some(function(juego){
    return juego.costo<=50;
});

// Reduce
const reducer = (acum, articulo) => acum + articulo.costo

let costoTotal = articulos.reduce(reducer, 0)

console.log("En total todos cuestan ${costoTotal}")





