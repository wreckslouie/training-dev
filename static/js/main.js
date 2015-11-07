function topImg(){
	$(".large-bg").height($(window).height())
}

function owlHead() {
    var owl = $("#owlize");

 
	owl.owlCarousel({
	    items : 8, //10 items above 1000px browser width
	    itemsDesktopSmall : [480,8], // betweem 900px and 601px
	    itemsTablet: [320,4], //2 items between 600 and 0
	    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

}

$(document).ready(function(){
	topImg();
	owlHead();
});

$(window).on('resize', function() {
	topImg();
});

/*
	Alpha by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {


	$(function() {
		$header = $('#masthead')

		$(window).on('load', function() {

			$('.large-bg').scrollwatch({
				delay:		0,
				range:		0.5,
				anchor:		'top',
				on:			function() { $header.addClass('alt reveal'); },
				off:		function() { $header.removeClass('alt'); }
			});

		});

	});

})(jQuery);