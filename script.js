var timer= 60;
var score = 0;
var hitrun= 0;

function runtime(){
   var time= setInterval(function(){
      if(timer> 0){
        timer--;
        document.querySelector("#box2").textContent = timer;
      }else{
        clearInterval(time)
        document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
      }
      
    },1000)
}
function hit(){
   hitrun= Math.floor(Math.random()*10)
    document.querySelector("#box3").textContent = hitrun;
}
function incresescore(){
    score+= 10

document.querySelector("#box").textContent = score
}
function bubble(){
    var clutter=""

    for(let i = 1; i <=160; i++) {
        var random= Math.floor(Math.random()*10)
        clutter +=`   <div id="bubble">${random}</div>  `
    }
    document.querySelector("#pbtm").innerHTML = clutter 
}

document.querySelector("#pbtm")
.addEventListener("click",
    function (dets){
 var clicked = (Number(dets.target.textContent));
 if(clicked === hitrun){
    incresescore();
    bubble();
    hit();
   
 }
})


incresescore();
runtime();
bubble()
hit();

