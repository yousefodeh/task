function moveRight(){
 if ($(".boxRight > div").length != 0) {
     $(".boxRight > .box:last-child")
        .detach()
        .appendTo('.boxLeft'); 
 } else {
   alert("There are no more boxes to move!")  
   }      
}
function moveLeft(){
 if ($(".boxLeft > div").length != 0) {
     $(".boxLeft > .box:last-child")
        .detach()
        .appendTo('.boxRight');
 } else {
   alert("There are no more boxes to move!")
   }      
}

