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

	$("#phone").mask("+7(999) 999-9999");

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
			});
		});
	});

	$(document).ready(function(){
		$(".navbar").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 350);
		});
	});

	$(document).ready(function(){
		$("#goto").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 350);
		});
	});

	var arr = {
		an1: 'Собака',
		an2: 'Кошка',
		an3: 'Хомяк',
		an4: 'Крыса',
		an5: 'Черепаха',
		an6: 'Рыбка',
		an7: 'Попугай',
		an8: 'Никого нет и не хочу',
		an9: 'Другой ответ',
	};
	for (var elem in arr) {
		document.getElementById(elem).addEventListener('click', inputHandler);
	}
	function inputHandler() {
		document.getElementById("an-checked").innerHTML = arr[this.id];
	}

	var sectionId = ['#ex1','#ex2','#ex3','#ex4','#ex5','#ex6'];
	var sectionPosition = sectionId.map(function(item, index, arr){
		return $(item).offset().top-50;
	});
	var currentSection = 0;
	$(document).ready(sectionScroll);
	$(window).scroll(sectionScroll); 

	function sectionScroll()
	{
		var winScrollTop = $(this).scrollTop();
		var i = 0;
		while (winScrollTop >= sectionPosition[i]) {
			i++;
		}
		if (currentSection == i)
			return ;
		currentSection = i;
		sectionId.forEach(function(item) {
			$('a[href$="' + item + '"]').children('span').hide(350);
			$('a[href$="' + item + '"]').parent().removeClass('active')
		});
		var selector = 'a[href$="' + sectionId[i-1] + '"]';
		$(selector).children('span').slideToggle(350);
		$(selector).parent().addClass('active');
	}

$('[data-fancybox="gallery"]').fancybox();

});

