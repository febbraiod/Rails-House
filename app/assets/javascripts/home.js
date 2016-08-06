
function flicker_on(){
  console.log('sec');
  $("#home").hide();
  $("#home_back_light").show();
}

function flicker_off(){
  $("#home").show();
  $("#home_back_light").hide();
}

function startTimer(){
  setInterval(flicker_on, 1000);
  setInterval(flicker_off, 1050);
}