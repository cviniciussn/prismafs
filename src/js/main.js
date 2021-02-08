import $ from 'jquery';
import { useState } from 'react';

// import logo from '../img/logo_top4.PNG';

$(document).ready(function () {

	
	var fullHeight = function () {
		
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});
		
		$('.arrowRight').on('click', function () {

			$('.menuBar').scrollLeft += 200;
			
			// console.log('TESTANDO SCROLLLEFT');
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
});