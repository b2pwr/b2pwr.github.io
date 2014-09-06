$(function(){

	$('ul.right:first-child').click(function(){
		console.log($('#about').offset().top);
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 600);
 
		return false;
	});

	$('.right li:nth-child(2)').click(function(){
		console.log($('#works').offset().top);
		$('html, body').animate({
			scrollTop: $('#works').offset().top
		}, 600);
 
		return false;
	});

	$('.right li:nth-child(3)').click(function(){
		console.log($('#contact').offset().top);
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 600);
 
		return false;
	});

	$(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

	$("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    
});