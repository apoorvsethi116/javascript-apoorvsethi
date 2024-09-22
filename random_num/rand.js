//random number genrator
const btn = document.getElementById("btn");
const label = document.getElementById("label1");
const labe2 = document.getElementById("label2");
const labe3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

btn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max)) + min;
    randomNum2 = Math.floor(Math.random() * (max)) + min;
    randomNum3 = Math.floor(Math.random() * (max)) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}