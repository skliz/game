// ! ibg

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

// ! burger

let icon_menu = document.querySelector('.icon-menu');
icon_menu.addEventListener("click", function (e) {
	icon_menu.classList.toggle('active');
	let menu_body = document.querySelector('.menu__body');
	menu_body.classList.toggle('active');
	let body = document.querySelector('body');
	body.classList.toggle('lock');
});



// ! popap

let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
});

// ! Инициализуем слайдер main-slider

let main_slider = new Swiper('.main-slider', {
	// Стрелки
	navigation: {
		nextEl: '.control-main-slider__arrow_next',
		prevEl: '.control-main-slider__arrow_prev'
	},

	// Чувствительность свойства
	touchRatio: 1,

	// Угол срабатывания свайпа/перетаскивания
	//touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Управление колесом мыщи
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,

	},

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отступ между слайдами
	spaceBetween: 0,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Скорость
	speed: 800,
	// Эффекты переключения слайдов
	// Куб
	effect: 'cube',
	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	// Отключить предзагрузку картинок
	//preloadImages: false,
	// lazy loading
	// подгрузка картинок
	lazy: {
		// подгружать на старте
		//переключение слайда
		loadOnTransitionStart: false,
		// подгрузить предыдущую
		// и следущую картинку
		loadPrevNext: true,
	},
});



//! Инициализируем Swiper
let slider_quotes = new Swiper('.slider-quotes', {
	// Стрелки
	navigation: {
		nextEl: '.control-slider-quotes__circle',
	},

	// Чувствительность свойства
	touchRatio: 1,

	// Угол срабатывания свайпа/перетаскивания
	//touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Управление колесом мыщи
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,

	},

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отступ между слайдами
	spaceBetween: 50,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Скорость
	speed: 800,
	// Отключить предзагрузку картинок
	//preloadImages: false,
	// lazy loading
	// подгрузка картинок
	lazy: {
		// подгружать на старте
		//переключение слайда
		loadOnTransitionStart: false,
		// подгрузить предыдущую
		// и следущую картинку
		loadPrevNext: true,
	},
});

// ! scroll
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1000, 'linear');
});
