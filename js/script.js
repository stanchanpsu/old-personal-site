$(document).ready(function(){
	smoothScroll();
	activeLink();
	email();
})

function email(){
	$('#email').hide();
	$("#show-email").on('click', function(e){
       $('#email').slideToggle("fast");
        });
}

function smoothScroll(){
	$('a[href*=#]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 250, 'swing', function () {
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

		console.log(scrollBottom)

		if(top < about){
			$('a[href="#home"]').addClass('active');
		}
		else if(top < gallery){
			$('a[href="#about"]').addClass('active');
		}
		else if(top < projects){
			$('a[href="#gallery"]').addClass('active');
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
