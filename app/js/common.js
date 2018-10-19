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
	var offsetX = 0.9 - e.pageX /w;
	var offsetY = 0.9 - e.pageY /h;
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

var target = $('.elem');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    //сработает когда пользователь доскроллит к элементу с классом .elem
  }
});
});


