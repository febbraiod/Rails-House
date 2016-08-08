
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


function startTimer(){
  setTimeout(setIntervals, 300);
  setTimeout(rail_lights, 3000);
  setTimeout(slideBanner, 4150);
}

function rail_lights(){
  $("#home_left").show();
  $("#home_back").hide();
  setInterval(light_switch, 700);
}

function light_switch(){
  console.log('on');
  if ($("#home_left").css('display') == 'none'){
    $("#home_left").show();
    $("#home_right").hide();
  }else{
    $("#home_right").show();
    $("#home_left").hide();
  }
}

function slideBanner(){
  $('#home_banner').animate({'marginRight' : "+=500px"}, 3600);
}
