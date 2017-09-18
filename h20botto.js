window.onload = runClock();
window.onload = getTime();
window.onload = drinkTimer();

function runClock(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = minSec(m);
  s = minSec(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(runClock, 500);
}
function minSec(i){
  if (i < 10) {
    i = "0" + i;
    return i;
  }
  else{
    return i;
  }
}
function getTime(){
  var g = $("#times").find(':selected').val();
  $("#timeselect").on('change', function(){
    var g = $("#times").find(':selected').val();
    console.log(g);
  });
  console.log(g);
}
function drinkTimer(){
  $("#startbutton").on('click', function(){
    console.log("start!");
    var t = setTimeout(drinkTimer, 180000);
    window.alert("Drink some water!");
  });
}
