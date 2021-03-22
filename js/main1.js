function prevClick(){
   var activeImg = $('.active');
   if (activeImg.hasClass('first')) {

    var prevImg = $('img.last');
    activeImg.removeClass('active');
    prevImg.addClass('active');
  }
  else {
    var prevImg = activeImg.prev('img');
    activeImg.removeClass('active');
    prevImg.addClass('active');
  }

}
function nextClick(){
  var activeImg = $('.active');
  if (activeImg.hasClass('last')) {
    var nextImg = $('img.first');
    activeImg.removeClass('active');
    nextImg.addClass('active');
  }
  else {
    var nextImg = activeImg.next('img');
    activeImg.removeClass('active');
    nextImg.addClass('active');
  }
}
function init() {
  $('.next').click(nextClick);
  $('.prev').click(prevClick);
}

$(document).ready(init);
