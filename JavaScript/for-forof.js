

//for
let estudiantes=["Maria","Sergio","Rosa","Daniel"];
function saludarEstudiantes(estudiantes){

    for(let i=0;i<estudiantes.length;i++){
        console.log("Hola"+estudiantes[i]);
    }
}
saludarEstudiantes(estudiantes);
//for of 
let estudiantes=["Maria","Sergio","Rosa","Daniel"];
for (let estudiante of estudiantes){
    console.log(estudiante)
}

