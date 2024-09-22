const increasebtn = document.getElementById("increasebtn");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlabel1 = document.getElementById("countlabel1");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel1.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel1.textContent = count;
}
resetbtn.onclick = function(){
    countlabel1.textContent = '0';
}