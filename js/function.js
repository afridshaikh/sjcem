$(document).ready(function(){

  // $('#nav').load("/nav.html");
  // $('#footer').load("/footer.html");
  // $('#nav').load("../nav.html");
  // $('#footer').load("../footer.html");

  $('div.menu-container-responsive').toggle(false);
  $('.menu-button-container').click(
    function() {
      // $('.menu-container-responsive').css('display','block');
      // console.log('clicked');
      $('.menu-container-responsive').slideToggle();
    }
  );

  $('div.menu-container-responsive li.menu-item').click(
    function() {
      $(this).find('ul.list').toggle(300);
    }
  );







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
