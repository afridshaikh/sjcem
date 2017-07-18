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



// -------------------- faculties
$('#show-hide1').toggle();
var angle1 = 180;
$('#view-more-btn1').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle1 +'deg)');
  $('#show-hide1').toggle(500);
  angle1 = 180 - angle1 ;
});


$('#show-hide2').toggle();
var angle2 = 180;
$('#view-more-btn2').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle2 +'deg)');
  $('#show-hide2').toggle(500);
  angle2 = 180 - angle2 ;
});


$('#show-hide3').toggle();
var angle3 = 180;
$('#view-more-btn3').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle3 +'deg)');
  $('#show-hide3').toggle(500);
  angle3 = 180 - angle3 ;
});


$('#show-hide4').toggle();
var angle4 = 180;
$('#view-more-btn4').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle4 +'deg)');
  $('#show-hide4').toggle(500);
  angle4 = 180 - angle4 ;
});



$('#show-hide5').toggle();
var angle5 = 180;
$('#view-more-btn5').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle5 +'deg)');
  $('#show-hide5').toggle(500);
  angle5 = 180 - angle5 ;
});



$('#show-hide6').toggle();
var angle6 = 180;
$('#view-more-btn6').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle6 +'deg)');
  $('#show-hide6').toggle(500);
  angle6 = 180 - angle6 ;
});



$('#show-hide7').toggle();
var angle7 = 180;
$('#view-more-btn7').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle7 +'deg)');
  $('#show-hide7').toggle(500);
  angle7 = 180 - angle7 ;
});



$('#show-hide8').toggle();
var angle8 = 180;
$('#view-more-btn8').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle8 +'deg)');
  $('#show-hide8').toggle(500);
  angle8 = 180 - angle8 ;
});


$('#show-hide9').toggle();
var angle9 = 180;
$('#view-more-btn9').click(function() {
  $(this).css('transition', 'all 500ms ease-in-out');
  $(this).css('transform', 'rotate('+ angle9 +'deg)');
  $('#show-hide9').toggle(500);
  angle9 = 180 - angle9 ;
});





});
