$(document).ready(function() {
	$('li.submenu__item').hover(function() {
		$('li.submenu__item').removeClass('js-active');
		$(this).addClass('js-active');
	})
	$(window).scroll(function() {
		var header_scroll = $(window).scrollTop();
		
		if(header_scroll > 10){
			$('.header').addClass('js-active');
		} else{
			$('.header').removeClass('js-active');
		}
	});
	
	$('.menu__burger').click(function() {
		$(this).toggleClass('js-active');
		$('.header__menu .menu__body').toggleClass('js-active');
	})
	

	if ($(window).width() < 769) {
		$('.menu__item--price .menu__link').click(function() {
			$(this).next().slideToggle();
			$(this).toggleClass('js-active');
		})
	}

})