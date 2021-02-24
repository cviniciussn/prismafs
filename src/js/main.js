import $ from 'jquery';
import '../css/animate.css';
import 'animate.css';

$(window).on('load', function () {

	setInterval(function () {

		$("#header").addClass('animate__animated animate__slideInDown').removeClass('opacity-0');
		$("#sidebar").addClass('animate__animated animate__flipInX').removeClass('opacity-0');

		setInterval(() => {
			$(".title").addClass('animate__animated animate__zoomIn').removeClass('opacity-0');
		}, 0);


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

	$("#teste2").on('load', function () {
			window.scrollTo(0, 0);
		})


})


// --------------------------------------------------------------------------------------------

export const fadeInDown = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeInDown').removeClass('opacity-0');
	}, sec * 1000);
};

export const fadeInUp = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeInUp').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutDown = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeOutDown').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutUp = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeOutUp').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeInLeft = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeInLeft').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeInRight = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeInRight').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutLeft = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeOutLeft').removeClass('opacity-0');
	}, sec * 1000);
}
export const fadeOutRight = (selector, sec) => {
	setInterval(() => {
		$(selector).addClass('animated fadeOutRight').removeClass('opacity-0');
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