
function flicker_on(){
  console.log('on');
  $("#home_back_light").show();
  $("#home_back_dim").hide();
  $("#home_back_mid").hide();
}

function flicker_off(){
  console.log('off');
  $("#home_back_light").hide();
  $("#home_back_dim").hide();
  $("#home_back_mid").hide();
}

function flicker_dim(){
  console.log('dim');
  $("#home_back_dim").show();
  $("#home_back_mid").hide();
}

function flicker_mid(){
  console.log('mid');
  $("#home_back_mid").show();
  $("#home_back_dim").hide();
}

function setIntervals(){
  var a = setInterval(flicker_on, 590);
  var b = setInterval(flicker_dim, 520);
  var c = setInterval(flicker_mid, 510);
  var d = setInterval(flicker_dim, 540);
  var e = setInterval(flicker_off, 660);

  function clear(){
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    clearInterval(d);
    clearInterval(e);
  }

  setTimeout(clear, 3700);
}


function startTimer(){
  setTimeout(setIntervals, 200);
}