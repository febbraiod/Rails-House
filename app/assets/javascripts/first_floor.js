$(function(){
  bind_package();
});

function bind_package(){
  $('#package_div').hover(showHighlight, hideHighlight);
}

function showHighlight(){
  $('#package').hide();
  $('#package_highlight').show();
}

function hideHighlight(){
  $('#package_highlight').hide();
  $('#package').show();
}