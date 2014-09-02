head.ready(function() {

	// map
	var myMap;
	// Дождёмся загрузки API и готовности DOM.
	function map_init () {
	  // Создание экземпляра карты и его привязка к контейнеру с
	  // заданным id ("map").
	  myMap = new ymaps.Map('map', {
	    // При инициализации карты обязательно нужно указать
	    // её центр и коэффициент масштабирования.
	    center: [55.76, 37.64], // Москва
	    zoom: 14
	  });
	}

	var map = $('.js-map'),
			map_trig = $('.js-map-trigger'),
			map_close = map.find('.map__close'),
			map_trig_text_1 = map_trig.text(),
			map_trig_text_2 = map_trig.data('text');
	map_trig.on('click', function () {
		if (!map_trig.hasClass('is-active')) {
			map_trig.html(map_trig_text_2);
			map_trig.addClass('is-active');
			map_trig.text(map_trig_text_2);
			ymaps.ready(map_init);
			map.fadeIn();
		}
		else {
			map_trig.removeClass('is-active');
			map_trig.html(map_trig_text_1);
			// Для уничтожения используется метод destroy.
			map.fadeOut(function () {
				myMap.destroy();
			});
		}
		return false;
	});
	map_close.on('click', function () {
	  map_trig.trigger('click');
	});

	// scroll
	$(document).scroll(function () {
		var el_try = $('.js-try'),
				el_try_top = el_try.offset().top,
				el_try_height = el_try.height(),
				scroll_top = $(document).scrollTop();
		if (scroll_top > (el_try_top + el_try_height)) {
			el_try.addClass('is-fixed');
		}
		else {
			el_try.removeClass('is-fixed');
		};
	});

});