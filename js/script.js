$(window).load(function() {
	$('.loader').fadeOut(1500);
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
		
		var height = $(window).height();

		var home = $('#home').offset().top;
		var about = $('#about').offset().top;
		var projects = $('#projects').offset().top;
		var blog = $('#blog').offset().top;
		var contact = $('#contact').offset().top;

		var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();


		if(top < about - (about-home)/2){
			$('a[href="#home"]').addClass('active');
		}
		else if(top < projects - (projects-about)/2 + 160){
			$('a[href="#about"]').addClass('active');
		}
		else if(top < blog - (blog-projects)/2 + 160){
			$('a[href="#projects"]').addClass('active');
		}
		else if(top < contact - (contact-blog)/2 + 160 && scrollBottom >= 2){
			$('a[href="#blog"]').addClass('active');
		}
		else{
			$('a[href="#contact"]').addClass('active');
		}
	}
}
