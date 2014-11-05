$(function() {

  $('#logo').on('click', function() {
    $(this).addClass('toggled');
    $('.stripe').animate({
      height: '20em'
    }, 1000);
    $('.link-icon').css({cursor: 'pointer'});
    $(this).css({cursor: 'default'});
  });

});