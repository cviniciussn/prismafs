import $ from 'jquery';
import { useState } from 'react';
import '../css/animate.css';

// import logo from '../img/logo_top4.PNG';


$(window).on('load', function() {

	setTimeout(function(){

        $("#header").addClass('animated-middle slideInDown').removeClass('opacity-0');
        $("#sidebar").addClass('animated-middle slideInUp').removeClass('opacity-0');
        // $(".nav-arrows span").removeClass('opacity-0').addClass('show-arrows');

    },1000);
});

$(document).ready(function () {
	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

		$('.arrowRight').on('click', function () {
			$('.menuBar').scrollLeft += 200;
		});
	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

	setInterval(() => {
		$('h1').addClass('animated').fadeIn().removeClass('opacity-0');
		
	}, 1000);
	
});