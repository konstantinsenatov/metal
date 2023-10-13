$(document).ready(function() {
	/* hero */
	var hero__swiper = new Swiper(".hero__swiper", {
		navigation: {
			prevEl: ".hero__swiper-arrows .swiper-arrow-prev",
			nextEl: ".hero__swiper-arrows .swiper-arrow-next",
		},
	});


	/* catalog */
	$('.catalog__show-more').hide();
	if ($('.catalog__item').length > 9) {
		$('.catalog__show-more').show()
	} else{
		$('.catalog__show-more').hide()
	}
	$('.catalog__show-more').click(function () {
		$('.catalog__item:hidden').slideDown(300);
		$('.catalog__item:hidden').length < 1 ? $('button.catalog__show-more').slideUp(100) : false;
	});





	if ($(window).width() > 1440) {
		$('.click').on('click', function() {
			
			let href = $(this).attr('href');
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - 90
			}, {
				duration: 300,
				easing: "linear"
			});
			
			return false;
		});
	} else if (768 < $(window).width()){
		let pxspace = (7 * $(window).width()) / 100
		console.log(pxspace);
		$('.click').on('click', function() {
			
			let href = $(this).attr('href');
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - pxspace
			}, {
				duration: 300,
				easing: "linear"
			});
			
			return false;
		});
	} else {
		let pxspacesm = (22 * $(window).width()) / 100
		console.log(pxspacesm);
		$('.click').on('click', function() {
			
			let href = $(this).attr('href');
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - pxspacesm
			}, {
				duration: 300,
				easing: "linear"
			});
			
			return false;
		});
	}
})


