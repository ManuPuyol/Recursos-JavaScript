const API_URL= 'https://swapi.dev/api/'
const PEOPLE_URL= 'people/:id'

//const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts={ crossDomain:true}

/*$.get(lukeUrl,opts,function(luke){
    console.log(`Hola yo soy , ${luke.name}`)
})*/

const onPeopleResponse= function(persona){
    console.log(`Hola yo soy , ${persona.name}`)
}

function obtenerPersonaje(id){
    const url =`${API_URL}${PEOPLE_URL.replace(`:id`,id)}`
    $.get(url,opts,onPeopleResponse)
}
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//no sabemos en que orden llegan las respuestas


//manejando el orden

function obtenerPersonaje(id,callback){
    const url =`${API_URL}${PEOPLE_URL.replace(`:id`,id)}`


    $.get(url,opts,callback).fail(function(){
        console.log("Sucedio un error")
    })
}


obtenerPersonaje(1,function(personaje){
    console.log(`Hola,yo soy ${personaje.name}`)
  
    obtenerPersonaje(2,function(personaje){
        console.log(`Hola,yo soy ${personaje.name}`)

        obtenerPersonaje(3)
    })
})

//esto generado se denomina callbackhell

//PROMESAS

function obtenerPersonaje(id){
    return new Promise((resolve,reject) => {
        const url =`${API_URL}${PEOPLE_URL.replace(`:id`,id)}`

        $.get(url,opts,function(data){
            resolve(data)
        })
        .fail(()=>reject(id))
    })
}

function onError(id){
    console.log("sucedio un error")
}

obtenerPersonaje(1)
.then(function(personaje){
    console.log(`Hola,yo soy ${personaje.name}`)
    return obtenerPersonaje(2)
})
.then(function(personaje){
    console.log(`Hola,yo soy ${personaje.name}`)
    return obtenerPersonaje(2)}
)
.catch(onError)

//MULTIPLES PROMESAS EN PARALELO
let ids=[1,2,3,4,5,6,7]

let promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})

Promise.all(promesas)
.then(personajes =>console.log(personajes))
.catch(onError)





//ASYNC-AWAIT

async function obtenerPersonajes(){
    let ids=[1,2,3,4,5,6,7]

let promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})
try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
}catch(id){
    onError(id)
}
}
obtenerPersonajes()

/*Promise.all(promesas)
.then(personajes =>console.log(personajes))
.catch(onError)*/



