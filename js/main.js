$(document).ready(function(){
	$('.imageslide:first').show();
	var current_img=0;
	$('.pulsanti>span:first').addClass('grigio');

	$('.dot').click(function(){
		$('.dot').eq(current_img).removeClass('grigio');
		$(this).addClass("grigio");
		$('figure').eq(current_img).hide();
		current_img=+$(this).data('num')-1;
		$('figure').eq(current_img).fadeIn();
	});

	$('.next').click(function(){

		$('.imageslide').eq(current_img).hide();
		$('.dot').eq(current_img).removeClass('grigio');
		if(current_img<4)
			current_img++;
		else
			current_img=0;
		$('.imageslide').eq(current_img).fadeIn();
		$('.dot').eq(current_img).addClass('grigio');
	});

	$('.prev').click(function(){
		$('.imageslide').eq(current_img).hide();
		$('.dot').eq(current_img).removeClass('grigio');
		if(current_img>0)
			current_img--;
		else
			current_img=4;
		$('.imageslide').eq(current_img).fadeIn();
		$('.dot').eq(current_img).addClass('grigio');
	});
  $(document).keydown(function (eventObject) {
    if (eventObject.which == 37) {
        $('.prev').click();
    } else if (eventObject.which == 39) {
        $('.next').click();
    }
});
});
