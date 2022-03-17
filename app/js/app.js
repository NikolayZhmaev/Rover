import { Swiper, Parallax, Mousewheel } from 'swiper';
Swiper.use([ Parallax, Mousewheel ])


document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false, //не используем зацикленную карусель
		speed: 2400,
		parallax: true,
		mousewheel: {
			invert: false,
		}


	})

})
