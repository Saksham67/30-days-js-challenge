let count = document.getElementById('counter');
let counter = 0;
document.getElementById('minus').addEventListener("click", decrement);
document.getElementById('reset').addEventListener("click", reset);
document.getElementById('plus').addEventListener("click", increment);

function increment(){
    counter++;
    count.innerHTML = counter;
}
function decrement(){
    counter--;
    count.innerHTML = counter;
}
function reset(){
    counter = 0;
    count.innerHTML = counter;
}
