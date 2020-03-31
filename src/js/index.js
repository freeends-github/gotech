$(document).ready(function(){
	$(".client_items").slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow : $(".left_arrow"),
		nextArrow : $(".right_arrow"),
		fade: true,
		cssEase: 'linear'
	  });
  });