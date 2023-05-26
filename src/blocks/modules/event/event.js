window.addEventListener('load', setCalendar);

import datepicker from 'air-datepicker';


function setCalendar() {

	$('#calendar-select').datepicker({
		range: true,
		onSelect: function() {
			changeCalendar();
		}
	});

	let toolbar = document.querySelector('.calendar__header');

	if (toolbar) {
		let type = toolbar.elements['event-type'];
		let date = toolbar.elements['calendar-type'];

		type.addEventListener('change', changeCalendar);
		// date.addEventListener('input', changeCalendar);
	}

	function changeCalendar(type, date) {

		$('.calendar__toolbar').show();
		let articles = document.querySelector('.calendar__content');

		let dateNowOptions = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			timezone: 'UTC'
		};
		let dateNow = new Date().toLocaleString("ru", dateNowOptions);

		let dateIncilOptions = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			timezone: 'UTC'
		};

		var dateIncil = new Date();
		dateIncil.setDate(dateIncil.getDate()+364);

		let dateFinal = dateIncil.toLocaleString("ru", dateNowOptions);

		let dateStart = toolbar.elements['calendar-type'].value.split(',')[0] || dateNow;
		let dateEnd = toolbar.elements['calendar-type'].value.split(',')[1] || dateFinal;

		$.ajax({
			url: '/ajax/eventslist.php',
			data: {
				count: '',
				type: toolbar.elements['event-type'].value,
				datafrom: dateStart,
				dataincil: dateEnd
			},
			type: 'GET',
			success: function (data) {
				console.log('От ' + dateStart + ' до ' + dateEnd);
				articles.innerHTML = data + '<div class="calendar-cart calendar-cart--clear"></div><div class="calendar-cart calendar-cart--clear"></div><div class="calendar-cart calendar-cart--clear"></div>';
			}
		});
	}

	let counter = 0;

	$('.calendar #load-more').click(function (e) {
		e.preventDefault();
		// let dateStart = toolbar.elements['calendar-type'].value.split(',')[0] || '01.01.2019';
		// let dateEnd = toolbar.elements['calendar-type'].value.split(',')[1] || '01.01.2025';
		let dateStart = toolbar.elements['calendar-type'].value.split(',')[0] || false;
		let dateEnd = toolbar.elements['calendar-type'].value.split(',')[1] || false;
		let btn = this;
		let position = window.pageYOffset;

		$(btn).find('span').text('Загрузка...');

		$.ajax({
			url: '/ajax/eventslist.php',
			data: {
				count: 20 + counter * 8,
				type: toolbar.elements['event-type'].value,
				datafrom: dateStart,
				dataincil: dateEnd
			},
			type: 'GET',
			success: function (data) {
				if (data.length > 150) {
					counter++;
					$('.calendar__content').find('.calendar-cart--clear').first().before(data);
					$(btn).find('span').text('Загрузить еще');
				} else {
					$(btn).find('span').text('Загрузить еще');
					$('.calendar__toolbar').hide();
				}
				window.scrollTo(0, position);
			}
		})
	})
}