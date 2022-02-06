let plusElement = document.getElementById("plus");
let minusElement = document.getElementById("minus");
let paraElement = document.getElementById("para1");


plusElement.onclick = function(){ 
    
    plusElement.classList.add("d-none")
    paraElement.classList.remove("d-none");
 };
minusElement.onclick=function(){
    paraElement.classList.add("d-none")
    plusElement.classList.remove("d-none")
}
