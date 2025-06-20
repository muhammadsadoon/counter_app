var display = document.getElementById("display");
var number = 0;
function increament(){
    number++
    display.innerHTML = number;
}
function decreament(){
    if(number > 0){
        number--
        display.innerHTML = number;
    }
}