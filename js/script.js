$(window).load(function() {
	$('.loader').fadeOut(1500);
// 	$('.hide-load').fadeIn(1500);
})

$(document).ready(function(){
	smoothScroll();
	activeLink();
	email();
	$('.hide-load').fadeIn(1500);

});

function email(){
	$('#email').hide();
	$('#email-icon').on('click', function(e){
		$('#email').slideToggle("fast", function(){
			$('body').stop().animate({
			'scrollTop': $('#email').offset().top
			}, 350, 'swing', function () {
			window.location.hash = "#contact";
			});
		});
	});
	$('#email-text').on('click', function(e){
       $('#email').slideToggle("fast", function(){
			$('body').stop().animate({
			'scrollTop': $('#email').offset().top
			}, 350, 'swing', function () {
			window.location.hash = "#contact";
			});
	   });
   });
}

function smoothScroll(){
	$('a[href*=#]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(this.hash);

		$('body').stop().animate({
			'scrollTop': $target.offset().top
		}, 280, 'swing', function () {
			window.location.hash = target;
		});
	});
}

function activeLink(){
	window.onscroll = function (event) {
		$('a[href*=#]').each(function () {
			$(this).removeClass('active');
	  })

		var top = $(window).scrollTop();

		var home = $('#home').offset().top -2;
		var about = $('#about').offset().top -2;
		var projects = $('#projects').offset().top -2;
		var blog = $('#blog').offset().top -2;
		var contact = $('#contact').offset().top -2;

		var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

		if(top < about){
			$('a[href="#home"]').addClass('active');
		}
		else if(top < projects){
			$('a[href="#about"]').addClass('active');
		}
		else if(top < blog){
			$('a[href="#projects"]').addClass('active');
		}
		else if(top < contact && scrollBottom >= 2){
			$('a[href="#blog"]').addClass('active');
		}
		else{
			$('a[href="#contact"]').addClass('active');
		}
	}
}
