var millisecond = document.getElementById('millisecond');
// var second = document.getElementById('second');
var startInverval;
var a = millisecond.innerHTML;
function start(){
    startInverval = setInterval(function(){
        a=Number(a);
        a++;
        millisecond.innerHTML = a
        console.log(a)
        
    },10);   
}
function stop(){
    clearInterval(startInverval);
}
function reset(){

}


