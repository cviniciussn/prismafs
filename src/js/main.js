import $ from 'jquery';

// import logo from '../img/logo_top4.PNG';

$(document).ready(function () {

	// "use strict";
	
	var fullHeight = function() {
	
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	
	};
	fullHeight();
	
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

	// if (($(window).width()) < 767) {
	// 	$(`<img id="logotype" className="logo" src=${logo} alt="BSBios" />`).appendTo("#containerLogo");
	// } else {
	// 	$("#logotype").remove();
	// 	}
	
});