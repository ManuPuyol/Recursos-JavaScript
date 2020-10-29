
//lo que haya dentro del time out se ejecuta en otra pila de tareas independientemente del tiempo asignado

/*console.log('a')
setTimeout(function (){
    console.log('b')
},0)
console.log('c')*/

setTimeout(() => console.log('d'),2000)

//los tiempos son muy importantes , el timeout esta en otra pila de ejecucion y hasta q no se hace el for no avanza , al igual que el tiempo de delay siempre es minimo ya que nada te garantiza 
//que vaya a empezar en ese tiempo , en el caso de que haya mas tareas en la pila.
for (let index = 0; index < 1000000000; index++) {
 
    
}











