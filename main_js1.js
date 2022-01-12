let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let second10 = 0;

let timeCount;

document.getElementById("stop").disabled = true;
document.getElementById("reset").disabled = true;

function count(){
   second10++;
   
   if(second10/10 ==1){
      second++;
      second10 = 0;
      
      if(second/60 == 1){
         minute++;
         second = 0;
         
         if(minute/60 == 1){
            hour++;
            minute = 0;
         }
      }
   }
   
   display.innerHTML = hour + ":" + minute + ":" + second + ":" + second10;
}



function startButton(){
   timeCount = setInterval(count,100);
   
   document.getElementById("start").disabled = true;
   document.getElementById("stop").disabled = false;
   document.getElementById("reset").disabled = false;
}

 function stopButton(){
   clearInterval(timeCount);
   
   document.getElementById("stop").disabled = true;
   document.getElementById("start").disabled = false;
 }

function resetButton(){
   clearInterval(timeCount);
   
   hour = 0;
   minute = 0;
   second = 0;
   second10 = 0;
   display.innerHTML = hour + ":" + minute + ":" + second + ":" + second10;
   
   document.getElementById("start").disabled = false;
   document.getElementById("stop").disabled = true;
   document.getElementById("reset").disabled = true;
}
