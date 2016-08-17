$(function(){
  bindFoyerHovers();
});

function bindFoyerHovers(){
  $('#foyer_ruby_hover').hover(rubyHoverOn, rubyHoverOff);
  $('#foyer_basement_hover').hover(basementHoverOn, basementHoverOff);
  $('#foyer_mainhouse_hover').hover(mainhouseHoverOn, mainhouseHoverOff);
}

function rubyHoverOn(){
  $('#foyer_ruby_highlight').show();
  $('#foyer').hide();
}

function rubyHoverOff(){
  $('#foyer_ruby_highlight').hide();
  $('#foyer').show();
}

function basementHoverOn(){
  $('#foyer_basement_highlight').show();
  $('#foyer').hide();
}

function basementHoverOff(){
  $('#foyer_basement_highlight').hide();
  $('#foyer').show();
}

function mainhouseHoverOn(){
  $('#foyer_mainhouse_highlight').show();
  $('#foyer').hide();
}

function mainhouseHoverOff(){
  $('#foyer_mainhouse_highlight').hide();
  $('#foyer').show();
}