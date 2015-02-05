
$(window).load(function() {
	$('.loader').fadeOut(3000);
});

$(document).ready(function(){
	smoothScroll();
	activeLink();
	email();
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
	
	$('.navigate li a').css('color','white');
	
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

		console.log(top);

		if (top < 2){
			$('.navigate li a').stop(true).animate({color: 'white', fontSize: '20px'}, 'fast');
			$('.navigate').stop(true).animate({backgroundColor: 'rgba(0,0,0,0)'}, 'fast');
			return;
		}
		else if(top > 2){
			$('.navigate li a').animate({color: '#337ab7', fontSize: '24px'}, 'fast');
			$('.navigate').animate({backgroundColor: 'rgba(255,255,255,0.9)' /*'rgba(169,213,239,0.9)'*/}, 'fast');
		}
		
		if(top < about){
			return;
		}
		else if(top < projects - (projects-about)/2 + 160){
			$('#nav-about').addClass('active');
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
