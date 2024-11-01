var timer = 3;
var score = 0;
var hit = 0;
function  makebubble(){
let clutter="";
 for (let i= 1; i <= 130; i++){
    var num = Math.floor(Math.random()*10);
    clutter +=` <div class="bubble">${num}</div>`;
    
}

document.querySelector(".p-bottom").innerHTML=clutter;
}

function runtimer(){
    if (timer > 0) {
        let timerInt = setInterval(function() {
            timer--;
            document.querySelector("#timer_val").textContent = timer;

           
                if (timer <= 0) {
                    clearInterval(timerInt);
                    document.querySelector(".p-bottom").innerHTML="Game Over";
                }
        }, 1000);
    }
}

function getnewhit(){
     hit =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hit;

}

function scoreinc(){
    score += 10;
    document.querySelector("#scoreval").innerHTML=score;

    
}


document.querySelector(".p-bottom").addEventListener("click",function(dets){
    var clickednum=(Number(dets.target.textContent));
    console.log(clickednum);
    if (clickednum==hit) {
       scoreinc();
      getnewhit();
      makebubble();


    }
    

})

runtimer(); 
makebubble();   

