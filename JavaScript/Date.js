function diasEntreFechas(fecha1,fecha2){
    const unDia = 1000 * 60 *60 *24
    const diferencia= Math.abs(fecha1-fecha2)

    return Math.floor(diferencia/unDia)

}
const hoy = new Date()
const nacimiento = new Date(1990,7,12)



var date = new Date()

var dateNow = {

	anio: date.getFullYear(),
	mes: date.getMonth(),
	dia: date.getDay()

}

console.log(`Hoy es: ${dateNow.dia}-${dateNow.mes}-${dateNow.anio}`)


setTimeout(() => console.log(3), 0)
console.log(4)