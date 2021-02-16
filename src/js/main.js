import $ from 'jquery';
import { useState } from 'react';
import '../css/animate.css';
import {Redirect} from 'react-router-dom'

// import logo from '../img/logo_top4.PNG';


$(window).on('load', function() {

	setInterval(function(){

        $("#header").addClass('animated-middle slideInDown').removeClass('opacity-0');
        $("#sidebar").addClass('animated-middle slideInUp').removeClass('opacity-0');

    },2000);
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

	$('#sidebar a').on('click', () => {
		$('#sidebar').toggleClass('active');

		// if( $(window).width() > 767) {
		// 	const teste = setInterval(() => {
		// 		$("#header").addClass('animated-middle slideOutUp');
		// 		$("#sidebar").addClass('animated-middle slideOutDown');
		// 		setInterval(() => {
		// 			$("#header").removeClass('slideOutUp');
		// 			$("#sidebar").removeClass('slideOutDown');
		// 		}, 2000);

		// 		clearInterval(teste)
		// 	}, 1000);
		// }
	})

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
});