$(function() {

  // -------------------------------------------------------------
  // HOME PAGE

  var animationTime = 200,
      homeIcones = [".balloon", ".zeppelin", ".plane", ".drone", ".rocket"];

  $('.steps-icons-container').find('.step').mouseover(function() {
    $('.mask').addClass('active');
    $(this).find('.step-name-container').addClass('visible');
  });
  $('.steps-icons-container').find('.step').mouseout(function() {
    $(this).find('.step-name-container').removeClass('visible');
  });
  $('.steps-icons-container').mouseout(function() {
    $('.mask').removeClass('active');
  });

  function homePageLoadingAnimation(array) {
    if (array.length > 0) {
      $('.steps-icons-container').find(array[0]).animate({
        opacity: 1
      }, animationTime, function() {
        array.shift();
        homePageLoadingAnimation(array);
      });
    }
  }

  homePageLoadingAnimation(homeIcones);

  // Sorry about the following code...
  // I know, it's a shame. I'll refactor this "quick & horrible dirty" thing soon...

  $('.steps-icons-container').find('.balloon').mouseover(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.balloon').addClass('visible');
  });
  $('.steps-icons-container').find('.balloon').mouseout(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.balloon').removeClass('visible');
  });

  $('.steps-icons-container').find('.zeppelin').mouseover(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.zeppelin').addClass('visible');
  });
  $('.steps-icons-container').find('.zeppelin').mouseout(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.zeppelin').removeClass('visible');
  });

  $('.steps-icons-container').find('.plane').mouseover(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.plane').addClass('visible');
  });
  $('.steps-icons-container').find('.plane').mouseout(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.plane').removeClass('visible');
  });

  $('.steps-icons-container').find('.drone').mouseover(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.drone').addClass('visible');
  });
  $('.steps-icons-container').find('.drone').mouseout(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.drone').removeClass('visible');
  });

  $('.steps-icons-container').find('.rocket').mouseover(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.rocket').addClass('visible');
  });
  $('.steps-icons-container').find('.rocket').mouseout(function() {
    $( this ).parent().parent().find('.step-descriptions-container').find('.rocket').removeClass('visible');
  });

});