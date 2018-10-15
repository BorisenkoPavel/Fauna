$(function() {

	$('.contest-carousel').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
	});

	$(".togle").click(function() {
			if($(this).children(".menu-sub").is(":visible")) {
			$(this).children(".menu-sub").fadeOut(0);
			$(this).parent().children("li").children("a").removeClass("active");
		} else {
			$(".menu-main > li > ul").hide();
			$(this).parent().children("li").children("a").removeClass("active");
			$(this).children("a").addClass("active");
			$(this).children(".menu-sub").slideDown();
		}
		});

$(window).on('mousemove', function(e) {
	var w = $(window).width();
	var h = $(window).height();
	var offsetX = 0.5 - e.pageX /w;
	var offsetY = 0.5 - e.pageY /h;
	$(".parallax").each(function(i,el){
	var offset = parseInt($(el).data('offset'));
    var translate = "translate3d(" + Math.round(offsetX*offset) + "px," + Math.round(offsetY * offset) + "px, 0px";
	$(el).css({
		'transform':translate
})
	})
})

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


});


