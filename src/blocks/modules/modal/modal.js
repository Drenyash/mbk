import magnificPopup from 'magnific-popup';
import { initSlider } from '../slider-thumbs/slider-thumbs.js';

(function () {
	$.ajax({
		url: '/piece.json',
		type: "../events.json",
		dataType: "json",
		success: function (data) {
			alert(data);
		}
	});
})();

$(document).ready(function () {

	$('.slider-front__more').click(function (e) {
		e.preventDefault();
		console.log(this);
		$.magnificPopup.open({
			items: {
				src: '#slider-front__modal',
				type: 'inline'
			}
		});
	});

	$('.modal-link').magnificPopup({
		type: 'inline',
	});

	// $('[data-fancybox="modal-service"]').on('click')(function (e) {

	// });

	// $('[data-fancybox="modal-service"]').on("click", (e) => {
	// 	e.preventDefault();

	// 	console.log(this);

	// 	// $.magnificPopup.open({
	// 	// 	items: {
	// 	// 		src: this.hash,
	// 	// 	},
	// 	// 	type: 'inline'
	// 	// });
	// });

});

let initServiceModals = () => {
	let links = document.querySelectorAll('a[data-modal="modal-service"]');

	for (let i of links) {
		i.addEventListener('click', (e) => {
			e.preventDefault();

			$.magnificPopup.open({
				items: {
					src: i.hash,
				},
				mainClass: 'modal--service',
				type: 'inline',
				callbacks: {
					open: () => {
						initSlider(document.querySelector(i.hash));
					  console.log('Открыли');
					},
				  }
			});
		});
	}
}

initServiceModals();