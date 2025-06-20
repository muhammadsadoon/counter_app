var display = document.getElementById("display");
var increamentBtn = document.getElementById("btn_2");
var number = 0;
function checkBtn() {
    if(number>= 1){
        increamentBtn.style.display = "block";
    }else{
        increamentBtn.style.display = "none";
    }
}
function increament() {
    number++
    display.innerHTML = number;
    checkBtn()
}
function decreament() {
    if (number > 0) {
        number--
        display.innerHTML = number;
    }
    checkBtn()
}
checkBtn()