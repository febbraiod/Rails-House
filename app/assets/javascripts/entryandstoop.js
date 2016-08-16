var frontDoorKey = false;
var holdingNote = false;

$(function(){
  bindEntryHighlights();
  bindNoteClick();
  bindKeyHover();
  bindLaptopHover();
  bindLaptopClick();
});

function bindEntryHighlights(){
  $('#package_div').hover(showPackageHighlight, hidePackageHighlight);
  $('#noteondoor_div').hover(showNoteHighlight, hideNoteHighlight);
}

function showPackageHighlight(){
  $('#package').hide();
  $('#package_highlight').show();
}

function hidePackageHighlight(){
  $('#package_highlight').hide();
  $('#package').show();
}

function showNoteHighlight(){
  $('#noteondoor').hide();
  $('#noteondoor_highlight').show();
}

function hideNoteHighlight(){
  $('#noteondoor_highlight').hide();
  $('#noteondoor').show();
}

function bindNoteClick(){
  $('#noteondoor_highlight').on('click', slideNote);
  $('#frontdoor_note_text').on('click', hideNote);
}

function slideNote(){
  $('#frontdoor_note_text').animate({"margin-right": "+=500px"}, 800);
}

function hideNote(){
  $('#frontdoor_note_text').hide();
  $('#noteondoor_highlight').hide();
  $('#noteondoor').hide();
  holdingNote = true;
}

function bindKeyHover(){
  $('#key_hover').hover(function(){
    $('#stoop_key_highlight').show();
    $('#stoop_key').hide();
  }, function(){
    $('#stoop_key').show();
    $('#stoop_key_highlight').hide();
  });
}

function bindLaptopHover(){
  $('#laptop_hover').hover(function(){
    $('#stoop_laptop_highlight').show();
    $('#stoop').hide();
  }, function(){
    $('#stoop').show();
    $('#stoop_laptop_highlight').hide();
  });
}

function bindLaptopClick(){
  $('#laptop_hover').click(function(){
    $('#laptop_hover').hide();
    $('#stoop_laptop_highlight').hide();
    $('#stoop').hide();
    $('#stoop_key').show();
  });
}


