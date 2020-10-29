


//condicionales ternarios

let numero=1;
let resultado=numero ===1 ? "Si soy un uno": "No no soy uno";
console.log(resultado)

let piedra="piedra";
let papel="papel";
let tijera="tijera";

function juego (yo,maquina){
    if(yo!=maquina){
         if(yo===piedra && maquina===tijera){
            console.log("Has ganado!!")
         }else if(yo===tijera && maquina===papel){
            console.log("Has ganado!!")

         }else if(yo===papel && maquina===piedra){
            console.log("Has ganado!!")
         }else{
             console.log("Ha ganado la maquina")
         }
    }else{
        console.log("Empate")
    }
}

juego(piedra,papel);




