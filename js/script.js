
  /*LOADER*/

  document.addEventListener("DOMContentLoaded", function () {
	function videoDemo() {
		let videoBlock = document.getElementById('video-block');
		let headerDisplay = document.querySelector('.header');
		let mainIndex = document.querySelector('.main-index');
		
		if(videoBlock) {
			if (document.body.clientWidth > 768) {	
				function showVideo() {
					document.body.classList.add('stop-scroll');
					setTimeout(() => {
						videoBlock.classList.add('video-hide'),
						headerDisplay.classList.add('header-display'),
						mainIndex.classList.add('main-index-display'),
						document.body.classList.remove('stop-scroll');

					}, 9500);
				}
				
				showVideo();
			} else {
				videoBlock.classList.add('video-hide'),
				headerDisplay.classList.add('header-display'),
				mainIndex.classList.add('main-index-display'),
				document.body.classList.remove('stop-scroll');
			}
		} 
	}

	videoDemo();
	var loader = document.getElementById("percentage");
	if (loader) {
		var counting = setInterval(function () {
			var currval = parseInt(loader.innerHTML);
			var Width = 99 - currval;
			var loadscreen = document.getElementById("loader-progress");
			loader.innerHTML = ++currval;
			if (currval > 89){
				loader.innerHTML = 90;
				if(window.jQuery) {
					//console.log('jquery loaded');
					loader.innerHTML = 95;
					if(document.readyState == "interactive") {
						loader.innerHTML = 99;
					}
					if(document.readyState == "complete") {
						//console.log('fully loaded!');
						clearInterval(counting);
						loader.innerHTML = 100;
						jQuery("body").toggleClass('page-loaded');
	/* 					document.body.classList.toggle('stop-scroll'); */
						setTimeout(function() {
							jQuery('nav').css('visibility','visible')
						}, 880);
					}
				}
			} 
			
			loadscreen.style.transition = "0.15s";
			loadscreen.style.width = Width + "%";
		}, 20);
	}
});


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
	speed: 3000,
	autoplay: {
		delay: 5000,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

    //пагинация
/*     pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, */
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

const myMap = document.querySelector('.my-map');

if (myMap) {
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
}

/*Разворачивание новаостей*/
function readMore() {
	const dots = document.getElementById("dots");
	const more = document.getElementById("more");
	const newsMore = document.getElementById("news-more");

	if(dots.style.display === "none") {
		dots.style.display = "inline";
		newsMore.innerHTML = "Подробнее";
		more.style.display = "none";

	} else  {
		dots.style.display = "none";
		newsMore.innerHTML = "Скрыть";
		more.style.display = "inline";
	}
}
//Форма
document.addEventListener("DOMContentLoaded", function () {
	const selector = document.querySelector("input[type='tel']");

	if (selector) {
		const im = new Inputmask("+7 (999)-999-99-99");
	
		//Маска телефона
		im.mask(selector);
	
		  //Валидация полей формы

	}
});

//Select
const element = document.querySelector('.select');
if (element) {
	const choices = new Choices(element, {
		searchEnabled: false,
		itemSelectText: '',
		shouldSort: false,
		position: 'bottom'
	});
}


//Попап
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');


let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.sign-up__popup'));
			e.preventDefault();
		})
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.sign-up__popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.sign-up__container')) {
				popupClose(e.target.closest('.sign-up__popup'));
			}
		})
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

//
function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
	   change.target.classList.add('element-show');
	  }
	});
  }
  
  let options = {
	threshold: [0.15] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
	observer.observe(elm);
  }



