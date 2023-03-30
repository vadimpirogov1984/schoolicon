
//Бургер-меню
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__list-link');

burger.addEventListener('click', function() {
		burger.classList.toggle('burger--active');
		menu.classList.toggle('header__nav--active');
		document.body.classList.toggle('stop-scroll');
	});

	menuLinks.forEach(function(el) {
		el.addEventListener('click', function() {
 			burger.classList.remove('burger--active');
			menu.classList.remove('header__nav--active');
			document.body.classList.remove('stop-scroll');
		});
});

const swiper = new Swiper('.swiper', {
    slidePerView: 1,
    loop: true,
	autoplay: {
		delay: 7000,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

    //пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*Classes*/ 

//Ввозвращение в начало страницы===========================
const goTopButton = document.querySelector(".go-top");
goTopButton.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

function goTop () {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -75);
		setTimeout(goTop,0);
	}
}

function trackScroll() {
	const offset = window.pageYOffset;
	const coordinate = document.documentElement.clientHeight;

	if (offset > coordinate) {
		goTopButton.classList.add("go-top--show");
	} else {
		goTopButton.classList.remove("go-top--show");
	}
}
/*Открытие на весь экран*/
/* baguetteBox.run('.gallery'); */

//Поиск===========================================
let searchBtn = document.querySelector('.header__button');
let searchForm = document.querySelector('.search-form');
let closeBtn = document.querySelector('.close-form__button');

/* searchBtn.addEventListener('click', function() {
    searchForm.classList.add('search-form--active');

}); */

/* closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    searchForm.classList.remove('search-form--active');

}); */

async function loadStudentsItems() {
    const response = await fetch('http://localhost:3000/api/students');
        const data = await response.json();
        console.log(data);

}

/*Переворот карт*/
const cards = document.querySelectorAll('.questions__card');
cards.forEach((card) => {
	card.addEventListener('click', () => {
		card.classList.toggle('flipped')
	});
});

//Карта
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.756505, 37.123470],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 16,
	});

	var myPlacemark = new ymaps.Placemark([55.756395, 37.123550], {}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/icons/dec-list.svg',
		iconImageSize: [48, 28]
	
	});
	
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
	myMap.controls.remove('rulerControl');
	myMap.controls.remove('trafficControl');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('geolocationControl');
	myMap.controls.remove('expandControl');
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('fullscreenControl');
	myMap.controls.remove('zoomControl');
}