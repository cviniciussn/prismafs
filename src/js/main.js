import $ from 'jquery';
import { useState } from 'react';
import '../css/animate.css';
import {Redirect} from 'react-router-dom'


$(window).on('load', function() {

	$("#sidebar ul li a").on('click', () => {
		console.log('teste de click #sidebar ul li')
		$("#sidebar ul li a").removeClass('#sidebar ul li a:focus')
		$(this).toggleClass('#sidebar ul li a .active');
	});

	setInterval(function(){

        $("#header").addClass('animated-middle slideInDown').removeClass('opacity-0');
        $("#sidebar").addClass('animated-middle slideInUp').removeClass('opacity-0');
        $(".title").addClass('animated-middle slideInUp').removeClass('opacity-0');


    }, 0);
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
	})

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
});

// --------------------------------------------------------------------------------------------

export const fadeInDown = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeInDown').removeClass('opacity-0');
	}, sec * 1000);
};

export const fadeInUp = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeInUp').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutDown = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeOutDown').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutUp = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeOutUp').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeInLeft = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeInLeft').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeInRight = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeInRight').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutLeft = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeOutLeft').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutRight = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated-middle fadeOutRight').removeClass('opacity-0');
	}, sec * 1000);
}

export const addDisplayNone = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('display-none');
	}, sec * 1000);
}

export const rmvDisplayNone = (selector, sec) => {
	setInterval(() => {
		$(selector).removeClass('display-none');
	}, sec * 1000);
}