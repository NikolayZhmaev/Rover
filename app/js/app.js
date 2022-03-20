/*jshint esversion: 6 */

import {
	Swiper,
	Parallax,
	Mousewheel,
	Controller,
	Pagination,
	Scrollbar,
	Navigation,
} from 'swiper';

Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation]);

import {
	gsap,
	Power2
} from 'gsap';


document.addEventListener('DOMContentLoaded', () => {

	//Swiper

	const swiperIMG = new Swiper('.slider-img', {
		loop: false, //не используем зацикленную карусель
		speed: 2400,
		parallax: true,
		pagination: {
			el: '.slider-pagination-count .total',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return `0${total}`
			}
		}
	});

	const swiperText = new Swiper('.slider-text', {
		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		}

	});

	swiperIMG.controller.control = swiperText;
	swiperText.controller.control = swiperIMG;


	// gear animation

	let gear = document.querySelector('.slider-gear');

	swiperText.on('slideNextTransitionStart', function () {
		gsap.to(gear, 2.8, {
			rotation: '+=40',
			ease: Power2.easeInOut,
		});
	});

	swiperText.on('slidePrevTransitionStart', function () {
		gsap.to(gear, 2.8, {
			rotation: '-=40',
			ease: Power2.easeInOut,
		});
	});

	//Slide Change

	let curnum = document.querySelector('.slider-pagination-count .current'),
		pagcur = document.querySelector('.slider-pagination-current__num')

	swiperText.on('slideChange', function () {
		let ind = swiperText.realIndex + 1
		gsap.to(curnum, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function () {
				gsap.to(curnum, .1, {
					force3D: true,
					y: 10
				})
				curnum.innerHTML = `0${ind}`;
				pagcur.innerHTML = `0${ind}`;

			}

		})
		gsap.to(curnum, .2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: .3
		})
	})

});