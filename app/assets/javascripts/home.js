
//handles silouette flicker
function flicker_on(){

  $("#home_back_light").show();
  $("#home_back_dim").hide();
  $("#home_back_mid").hide();
}

function flicker_off(){

  $("#home_back_light").hide();
  $("#home_back_dim").hide();
  $("#home_back_mid").hide();
}

function flicker_dim(){

  $("#home_back_dim").show();
  $("#home_back_mid").hide();
}

function flicker_mid(){

  $("#home_back_mid").show();
  $("#home_back_dim").hide();
}

//turns audio on
function getAudio() {
  document.getElementById('bells').play();
}

//handles railroad crossing lights
function rail_lights(){
  $("#home_left").show();
  $("#home_back").hide();
  var l = setInterval(light_switch, 700);

  function clear(){
    clearInterval(l);
  }

  setTimeout(clear, 5800);
}

function light_switch(){
  if ($("#home_left").css('display') == 'none'){
    $("#home_left").show();
    $("#home_right").hide();
  }else{
    $("#home_right").show();
    $("#home_left").hide();
  }
}

//finish with empty window
function empty_window(){
  $("#home_left").hide();
  $("#home_right").hide();
}


// controls flicking in browser
function setIntervals(){
  var a = setInterval(flicker_on, 600);
  var b = setInterval(flicker_dim, 530);
  var c = setInterval(flicker_mid, 520);
  var d = setInterval(flicker_dim, 550);
  var e = setInterval(flicker_off, 650);

  function clear(){
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    clearInterval(d);
    clearInterval(e);
  }

  setTimeout(clear, 2600);
}

//binds events on doc load in application.js
function startTimer(){
  setTimeout(setIntervals, 300);
  setTimeout(rail_lights, 3000);
  // setTimeout(slideBanner, 4150);
  setTimeout(getAudio, 3300);
  setTimeout(empty_window, 9000);
}

//for train light hover

function trainLights(){
  $('#train_lights_button').hover(showTrainLights, hideTrainLights);
}

function showTrainLights(){
  $('#train_lights_on').show();
}

function hideTrainLights(){
  $('#train_lights_on').hide();
}
