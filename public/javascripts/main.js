 $(document).ready(function(){
	"use strict";

	$("header .navicon a").click(function(){
		$(this).fadeOut("slow");
		$(".menu").css({"visibility":"visible", "opacity":"1"});
		$(".menu .menu-logo").addClass("animated fadeInUp");
		$(".menu .menu-list li").addClass("animated fadeInDownBig");
		$(".menu .social-icons").addClass("animated fadeInDown");
		$(".menu").addClass("animated fadeIn");
	});

	$(".menu .close-icon").click(function(){
		$(".menu").css({"visibility":"hidden", "opacity":"0"});
		$(".menu .menu-logo").removeClass("animated fadeInUp");
		$(".menu .menu-list li").removeClass("animated fadeInDownBig");
		$(".menu .social-icons").removeClass("animated fadeInDown");
		$(".menu").removeClass("animated fadeIn");
		$("header .navicon a").fadeIn("slow");
	});

	$("#to-top").click(function () {
	   $("html, body").animate({scrollTop: 0}, 1000);
	});


	$(window).scroll(function() {
	    if ($(this).scrollTop()) {
	        $('#to-top:hidden').stop(true, true).fadeIn();
	    } else {
	        $('#to-top').stop(true, true).fadeOut();
	    }
	});

	function centerOverlay() {
		$(".salvattore-projects .overlay .overlay-inner").each(function(){
			var overlayinnerWidth = $(this).width();
			var overlayinnerHeight = $(this).height();

			var leftMargin = "-" + (overlayinnerWidth / 2) + "px";
			var topMargin = "-" + (overlayinnerHeight / 2) + "px";

			$(this).css("margin-left", leftMargin);
			$(this).css("margin-top", topMargin);
		});
	}

	centerOverlay();

	$(window).resize(function() {
		centerOverlay();
	});

	$('video,audio').mediaelementplayer({
		startVolume: 0,
		loop: true
	});
});

$(window).load(function(){
	"use strict";
	
	(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'header.ip-header' ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function startLoading() {
		classie.remove( container, 'loading' );
		classie.add( container, 'loaded' );

		var onEndHeaderAnimation = function(ev) {
			if( support.animations ) {
				if( ev.target !== header ) return;
				this.removeEventListener( animEndEventName, onEndHeaderAnimation );
			}

			classie.add( document.body, 'layout-switch' );
			window.removeEventListener( 'scroll', noscroll );
		};

		if( support.animations ) {
			header.addEventListener( animEndEventName, onEndHeaderAnimation );
		}
		else {
			onEndHeaderAnimation();
		}
	}

	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

	})();
});