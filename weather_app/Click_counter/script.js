let counter = document.getElementById("counter")
let increase = document.getElementById("increase")
let reset = document.getElementById("reset")

let count = 0;
increase.addEventListener("click", function(){
    count = count + 1;
    counter.textContent=count;
}); 

reset.addEventListener("click",function(){
    counter.textContent=0;
    count = 0;
});