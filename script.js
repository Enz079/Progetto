const x = document.getElementById("x");
const y = document.getElementById("y");
const btn = document.getElementById("btn");
const a = document.getElementById("a");

function sum(){
    a.innerHTML = parseInt(x.value) + parseInt(y.value);
}
btn.addEventListener("click", sum);