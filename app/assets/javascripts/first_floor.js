$(function(){
  bindEntryHighlights();
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