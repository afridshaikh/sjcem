$(document).ready(function(){

  $('#nav').load("/nav.html");
  $('#footer').load("/footer.html");
  $('#nav').load("../nav.html");
  $('#footer').load("../footer.html");

  $('.menu-button-container').hover(function(){
    $(this).css('transform','45deg');
  });

// ---------------------------------------- index --------------------------------------

//syllabus
  $('#be').click(function(){
    $('#option-be').toggle(300);
  });
  $('#te').click(function(){
    $('#option-te').toggle(300);
  });
  $('#se').click(function(){
    $('#option-se').toggle(300);
  });

});
