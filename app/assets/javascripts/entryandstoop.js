var frontDoorKey = false;
var holdingNote = false;

$(function(){
  bindEntryHighlights();
  bindNoteClick();
  bindKeyHover();
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
    $('#stoop_key_hightlight').show();
    $('#stoop_key').hide();
  }, function(){
    $('#stoop_key').show();
    $('#stoop_key_hightlight').hide();
  });
}


