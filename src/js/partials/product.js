$(document).ready(function() {
	$(".content-product__table-wrapper").each(function (i) {
		$(this).prop("id", "content-product__table-wrapper" + i);
	});
	$(".content-product__nav-btn").each(function (i) {
		$(this).prop("id", "content-product__nav-btn" + i);
	});
	$(".content-product__nav-btn").each(function (i) {
		$(this).prop("href", "#content-product__table-wrapper" + i);
	});
	$(".content-product__nav-btn").click(function () {
		$('.content-product__nav-btn').removeClass('js-active')
		$(this).addClass('js-active')
	});
	
	
	/* $(document).on('scroll', function() {
		var num = 0;
		$('.content-product__nav-btn').each(function(){
			var wh = $(window).height();
			var wt = $(window).scrollTop();
			var wb = (wh + wt);
			console.log(wb);
			var eh = $('#content-product__table-wrapper'+num+'').outerHeight();
			var et = $('#content-product__table-wrapper'+num+'').offset().top;
			var eb = (eh + et);
			if ((eb >= wt) && (et <= wb)){
				$('#content-product__nav-btn'+num+'').addClass("js-active");
			} else {
				$('#content-product__nav-btn'+num+'').removeClass("js-active");
			}
			num++;
		})
	}); */
})