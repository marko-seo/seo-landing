$(function () {

	/* === Header === */
	// Menu
	$('.burger').on('click', function () {
		$(this).toggleClass('burger--active');
		$('.mob-nav').toggleClass('mob-nav--open');
		$('body').toggleClass('scroll-stop');
	});

	let scrollBorder = $('.offer').height() - $('.header').height(),
		firstScreen = $('.offer').height() / 2;


	$(document).on('scroll', function () {
		// Header sticky
		if ($(this).scrollTop() > scrollBorder) {
			$('.header')
				.addClass('header--sticky');
		} else {
			$('.header')
				.removeClass('header--sticky');
		}
		// Cloud visible
		if ($(this).scrollTop() < firstScreen) {
			$('.offer__cloud')
				.addClass('offer__cloud--active');
		} else {
			$('.offer__cloud')
				.removeClass('offer__cloud--active');
		}
	});

	$(document).scroll();

	// Scroll landing
	$('.menu__link, .mob-menu__link').on('click', function (e) {
		let sect = $(this).attr('href');

		if (sect.length > 0) {
			$('html, body').animate({
				scrollTop: $(sect).offset().top - $('.header').height()
			}, 700);
		}

		if ($('.mob-nav').css('display') != 'none') {
			$('.burger').click();
		}

		e.preventDefault();
	});


	/* === Key work  ===*/
	// Tabs
	$(document).on('click', '.works__caption', function () {

		let prevIndex = $('.works__caption--active').index(),
			lastIndex = $('.works__caption').length - 1,
			currIndex = $(this).index();

		if (currIndex != 0) {
			if (currIndex < prevIndex || currIndex == lastIndex) {
				$(this)
					.addClass('works__caption--arrow-up');
			} else {
				$(this)
					.removeClass('works__caption--arrow-up');
			}
		}

		$('.works__caption')
			.removeClass('works__caption--active')
			.eq(currIndex).addClass('works__caption--active');

		$('.works__contents-item')
			.removeClass('works__contents-item--active')
			.eq(currIndex).addClass('works__contents-item--active');
	});

	/* === Reviews === */
	let sliderBtnPrev = ' \
		<button class="slider-btn slider-btn--prev"> \
			<svg> \
				<use xlink:href="img/sprite.svg#icon-arrow-left"></use> \
			</svg> \
		</button> \
	';

	let sliderBtnNext = ' \
		<button class="slider-btn slider-btn--next"> \
			<svg> \
				<use xlink:href="img/sprite.svg#icon-arrow-right"></use> \
			</svg> \
		</button> \
	';

	// Slider
	$('.reviews__slider').slick({
		slidesToShow: 4,
		draggable: false,
		appendArrows: $('.reviews__nav-inner'),
		prevArrow: sliderBtnPrev,
		nextArrow: sliderBtnNext,
		responsive: [
			{
				breakpoint: 1921,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: '20%',
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: '15%',
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '20%',
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '10%',
				}
			}
		]
	});

	$('.reviews__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		let resCurrentSlide = nextSlide || 0;

		let firstElem = resCurrentSlide + 1,
			lastElem;

		$(window).width() > 992 ? lastElem = resCurrentSlide + 4 : lastElem = resCurrentSlide + 3;

		$('.reviews__content')
			.removeClass('reviews__content--overlay');

		$('.reviews__item')
			.eq(firstElem)
			.children()
			.addClass('reviews__content--overlay');

		$('.reviews__item')
			.eq(lastElem)
			.children()
			.addClass('reviews__content--overlay');
	});

	$('.reviews__slider').trigger('beforeChange');

	// Popup reviews 
	$(document).on('click', '.reviews__link', function (e) {
		let path = $(this).attr('href');

		$('body')
			.append(
				'<div class="overlay"> \
					<div class="reviews__img-otz"> \
						<img src=' + path + '> \
						<button class="popup__close"> \
							<svg class="icon-cross"> \
								<use xlink:href="img/sprite.svg#icon-cross"></use> \
							</svg> \
					 </button> \
					</div> \
				 </div>'
			)
			.addClass('scroll-stop');

		e.preventDefault();
	});


	/* === Result === */
	// slider
	$('.result__slider').slick({
		slidesToShow: 1,
		draggable: false,
		appendArrows: $('.result__nav'),
		prevArrow: sliderBtnPrev,
		nextArrow: sliderBtnNext,
	})

	/* === Popup === */
	const objFunc = {
		freeAnalysis: ' \
			<div class="overlay"> \
				<div class="popup"> \
					<div class="popup__title"> \
						Бесплатный анализ сайта <br> \
						и стратегия продвижения \
					</div> \
					<p class="popup__desc"> \
						Заполните форму ниже и мы бесплатно проведем \
						анализ вашего сайта, сформируем стратегию дальнейшего \
						продвижения и рассчитаем стоимость SEO \
					</p> \
					<form class="form popup__form" id="test2"> \
						<div class="form__group"> \
							<input type="text" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">Ваше имя*:</label> \
						</div> \
						<div class="form__group"> \
							<input type="tel" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">Телефон*:</label> \
						</div> \
						<div class="form__group"> \
							<input type="text" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">E-mail*:</label> \
						</div> \
						<div class="form__group"> \
							<input type="text" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">Адрес сайта*:</label> \
						</div> \
						<textarea class="form__textarea" placeholder="Комментарий"></textarea> \
						<div class="form__action"> \
							<button class="btn btn-accent popup__submit">Оставить заявку</button> \
						</div> \
						<label class="checkbox"> \
							<input class="checkbox__field" type="checkbox" checked required> \
							<span class="checkbox__indicator"></span> \
							<p class="checkbox__text">Согласен на обработку персональных данных</p> \
						</label> \
					</form> \
					<button class="popup__close"> \
						<svg class="icon-cross"> \
							<use xlink:href="img/sprite.svg#icon-cross"></use> \
						</svg> \
					</button> \
					<div class="preloader"> \
						<div class="preloader__item-1"></div> \
						<div class="preloader__item-2"></div> \
						<div class="preloader__item-3"></div> \
						<div class="preloader__item-4"></div> \
						<div class="preloader__item-5"></div> \
				  </div> \
				</div> \
		  </div> \
		',
		freeAnalysis2: ' \
			<div class="overlay"> \
				<div class="popup"> \
					<div class="popup__title"> \
						Оставить заявку на услуги <br> \
					</div> \
					<p class="popup__desc"> \
					  Заполните форму ниже и наш менеджер \
						свяжется с вами в ближайшее время \
						для уточнения всех деталей будущего проекта \
					</p> \
					<form class="form popup__form" id="test2"> \
						<div class="form__group"> \
							<input type="text" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">Ваше имя*:</label> \
						</div> \
						<div class="form__group"> \
							<input type="tel" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">Телефон*:</label> \
						</div> \
						<div class="form__group"> \
							<input type="text" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">E-mail*:</label> \
						</div> \
						<div class="form__group"> \
							<input type="text" class="form__input" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">Адрес сайта*:</label> \
						</div> \
						<textarea class="form__textarea" placeholder="Комментарий"></textarea> \
						<div class="form__action"> \
							<button class="btn btn-accent popup__submit">Оставить заявку</button> \
						</div> \
						<label class="checkbox"> \
							<input class="checkbox__field" type="checkbox" checked required> \
							<span class="checkbox__indicator"></span> \
							<p class="checkbox__text">Согласен на обработку персональных данных</p> \
						</label> \
					</form> \
					<button class="popup__close"> \
						<svg class="icon-cross"> \
							<use xlink:href="img/sprite.svg#icon-cross"></use> \
						</svg> \
					</button> \
					<div class="preloader"> \
						<div class="preloader__item-1"></div> \
						<div class="preloader__item-2"></div> \
						<div class="preloader__item-3"></div> \
						<div class="preloader__item-4"></div> \
						<div class="preloader__item-5"></div> \
					</div> \
				</div> \
		  </div> \
		',
		call: ' \
			<div class="overlay"> \
				<div class="popup"> \
					<div class="popup__title"> \
						Мы перезвоним! \
					</div> \
					<p class="popup__desc"> \
						Остались вопросы? Укажите номер вашего телефона, и наш  \
						специалист свяжется с вами в течении 15 минут.  \
					</p> \
					<form class="form popup__form" id="test"> \
						<div class="form__group"> \
							<input type="tel" class="form__input" name="field-tel" required> \
							<span class="form__bar"></span> \
							<label class="form__placeholder">Телефон*:</label> \
						</div> \
						<div class="form__action"> \
							<button type="submit" class="btn btn-accent popup__submit">Оставить заявку</button> \
						</div> \
						<label class="checkbox"> \
							<input class="checkbox__field" type="checkbox" name="field_consent" checked required> \
							<span class="checkbox__indicator"></span> \
							<p class="checkbox__text">Согласен на обработку персональных данных</p> \
						</label> \
					</form> \
					<button class="popup__close"> \
						<svg class="icon-cross"> \
							<use xlink:href="img/sprite.svg#icon-cross"></use> \
						</svg> \
					</button> \
					<div class="preloader"> \
						<div class="preloader__item-1"></div> \
						<div class="preloader__item-2"></div> \
						<div class="preloader__item-3"></div> \
						<div class="preloader__item-4"></div> \
						<div class="preloader__item-5"></div> \
				  </div> \
				</div> \
		  </div> \
		'
	}

	const popupRender = (func) => {
		$('body').prepend(func);
		$('.popup').addClass('popup--open');
		$('body').addClass('scroll-stop');
	}

	const popupRemove = () => {
		$('.overlay').remove();
		if ($('.mob-nav--open').length > 0) {
			return false;
		} else {
			$('body').removeClass('scroll-stop');
		}
	}

	$('.btn-free').on('click', function () {
		return popupRender(objFunc.freeAnalysis);
	});

	$('.btn-free2').on('click', function() {
		return popupRender(objFunc.freeAnalysis2);
	})

	$('.btn-call').on('click', function () {
		return popupRender(objFunc.call);
	});


	$(document).on('click', '.popup__close', function () {
		popupRemove();
	});

	$(document).on('click', '.overlay', function (e) {
		let elem = e.target;

		if ($(elem).hasClass('overlay')) {
			popupRemove();
		}
	});


	/* === Ajax === */
	const showPreload = () => {
		return $('.preloader').addClass('preloader--active');
	}

	const changeForm = () => {
		$('.popup__title')
			.text('Заявка успешно отправлена');
		$('.popup__desc')
			.text('Спасибо за вашу заявку, в ближайшее время с вами свяжется наш специалист.');
		$('.popup__form')
			.remove();
		$('.preloader')
			.removeClass('preloader--active');

		return false;
	}

	$(document).on('submit', '#test', function () {
		showPreload();
		$.ajax({
			type: "POST",
			url: '../app/php/mail.php',
			data: $(this).serialize()
		}).done(function () {
			changeForm();
		});
		return false;
	});

	$(document).on('submit', '#test2', function () {
		showPreload();
		$.ajax({
			type: "POST",
			url: '../app/php/mail.php',
			data: $(this).serialize()
		}).done(function () {
			changeForm();
		});
		return false;
	});







});
