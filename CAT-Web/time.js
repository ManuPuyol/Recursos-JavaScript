window.onload=()=>{
    h=0 ; m=0; s=0; mls=0; timeStarted=0;
    time=document.getElementById("time");
    btnStart = document.getElementById("btn-start");
    fecha=document.getElementById("fecha");
    //btnStop = document.getElementById("btn-stop");
    event();
 
    
    


}

function event(){
    btnStart.addEventListener("click",start);
    fechaActual();
    write();

    //btnStop.addEventListener("click",stop);


}
/*function write(){
    let ht,mt,st,mlst;
    mls++;
    
    if(mls>99){s++; mls=0;}
    if(s>59){m++;s=0;}
    if(m>9){h++;m=0;}
    if(h>24)h=0;

    mlst= ('0'+mls).slice(-2);
    st=('0'+s).slice(-2);
    mt=('0'+m).slice(-2);
    ht=('0'+h).slice(-2);

    time.innerHTML=`${ht}:${mt}:${st}`;

}*/
function write(){
    var rtClock= new Date();
    var hours=rtClock.getHours();
    var minutes=rtClock.getMinutes();
    var seconds=rtClock.getSeconds();

    //Add AM y PM 

    var amPm=(hours<12)?"AM":"PM";

    //Convertir las horas a formato de 12 h

    hours = (hours>12)?hours-12:hours;

    //Poner los ceros correspondientes

    hours =("0" + hours).slice(-2);
    minutes =("0" + minutes).slice(-2);
    seconds =("0" + seconds).slice(-2);

    //poner el reloj

    time.innerHTML=hours+":"+minutes+":"+seconds+" "+ amPm;
    var t=setTimeout(write,500);

    


}
//CRONOMETRO
/*function start(){
    write();
    timeStarted=setInterval(write,10);

    btnStart.removeEventListener("click",start);
    
    btnStart.addEventListener("click",stop);

    btnStart.value="Stop"
    btnStart.innerHTML='CERRAR FICHAJE'

}
function stop(){
    console.log("Stopped")
    clearInterval(timeStarted);
    time.innerHTML = "00:00:00";
    h=0 ; m=0; s=0; mls=0; timeStarted=0;
    btnStart.removeEventListener("click", stop);
    btnStart.addEventListener("click",start);
    btnStart.value="Start"
    btnStart.innerHTML='FICHAR ENTRADA'


}*/
function start(){
    
   
    
    btnStart.removeEventListener("click",start);
    
    btnStart.addEventListener("click",stop);

    btnStart.value="Stop"
    btnStart.innerHTML='CERRAR FICHAJE'

}
function stop(){
   
    
    btnStart.removeEventListener("click", stop);
    btnStart.addEventListener("click",start);
    btnStart.value="Start"
    btnStart.innerHTML='FICHAR ENTRADA'


}


function fechaActual(){

    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date();


    fecha.innerHTML=diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
    

    //FECHA BÁSICA CON NUMEROS
   // var f = new Date();
    //document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

}



