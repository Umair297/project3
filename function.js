let plus = document.getElementById("plus");
let neg = document.getElementById("neg");
let answ = document.getElementById("answ");
let container = document.querySelector(".container");

plus.onclick = function(){
    answ.style.display="block";
    container.style.height="380px";
}
neg.onclick = function(){
    answ.style.display="none";
    container.style.height="170px";
}