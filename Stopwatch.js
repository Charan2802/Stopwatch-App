let Minutes=0;
let Seconds=0;
let Milli=0;

let btnMinutes=document.querySelector('.Minutes');
let btnSeconds=document.querySelector('.Seconds');
let btnMilli=document.querySelector('.Milli');
let btnStart=document.querySelector('.js-start');
let btnLap=document.querySelector('.btn-Lap');
let btnStop= document.querySelector('.btn-Stop');
let btnReset= document.querySelector('.btn-Reset');
let Interval;

btnStart.addEventListener('click',()=>{
 Interval=setInterval(startTimer,10)
})
btnStop.addEventListener('click',()=>{
    clearInterval(Interval);
    console.log(JSON.stringify(`${Minutes}.${Seconds}.${Milli}`));
    const jsonstring=JSON.stringify(`${Minutes}.${Seconds}.${Milli}`);
   })
btnReset.addEventListener('click',()=>{
    clearInterval(Interval);
    Milli=0;
    Seconds=0;
    Minutes=0;
    btnMilli.innerHTML=Milli;
    btnSeconds.innerHTML=Seconds;
    btnMinutes.innerHTML=Minutes;
   })

function startTimer(){
    Milli++;
if(Milli<=9){
    btnMilli.innerHTML='0'+Milli;
}
if(Milli>9){
    btnMilli.innerHTML=Milli;
}
if(Milli>99){
    Seconds++;
    btnSeconds.innerHTML='0'+Seconds;
    Milli=0;
    btnMilli.innerHTML='0'+0;
}
if(Seconds>60){
    Minutes++;
    btnMinutes.innerHTML='0'+Minutes;
    Seconds=0;
    btnSeconds.innerHTML='0'+0;
   }
}
