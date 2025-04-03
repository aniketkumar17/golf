var cur=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x+"px"
    cur.style.top=dets.y+"px"

})
var blu=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blu.style.left=dets.x- 50 +"px"
    blu.style.top=dets.y- 50 +"px"

})

