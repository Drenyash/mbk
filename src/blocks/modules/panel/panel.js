// Скрывание изображений

(function toggleImage(){

	const btn = document.querySelector('#toggle-image');
	const imageArray = document.querySelectorAll('.image');
	const imageBgArray = document.querySelectorAll('.hide-bg');
	const hideImageArray = document.querySelectorAll('.hide-image');
	const noneImageArray = document.querySelectorAll('.none-image');
	let localVarImage = localStorage.getItem("images");

	if (localVarImage === null) {
		enableImages();
		localVarImage = localStorage.getItem("images");
	}

	if (localStorage.images === 'false') {
		disableImages();
		localVarImage = localStorage.getItem("images");
	} else {
		enableImages();
		localVarImage = localStorage.getItem("images");

	}


	if (btn && imageArray) {
		btn.addEventListener('click', function(){
			if (localStorage.images === 'true'){
				disableImages();
				console.log(localStorage.images)
				localStorage.setItem("images", false);
				
			} else {
				enableImages();
				console.log(localStorage.images)
				localStorage.setItem("images", true);
			}
		});
	}

	// (function initTheme(){
	// 	if (localVarImage == false||0) {
	// 		localStorage.setItem("theme","light");
	// 	} else {

	// 	}
	// })();

	function enableImages() {
		let i;
		for(i = 0; i < imageArray.length; i++) {
			imageArray[i].classList.remove('image--hide');
		}
		let n;
		for(n = 0; n < imageBgArray.length; n++) {
			imageBgArray[n].classList.remove('hide-bg--active');
		}
		let z;
		for(z = 0; z < hideImageArray.length; z++) {
			hideImageArray[z].classList.remove('hide-image--active');
		}

		let m;
		for(m = 0; m < noneImageArray.length; m++) {
			noneImageArray[m].classList.remove('none-image--active');
		}
		localStorage.setItem("images", 'true');
		localVarImage = localStorage.getItem("images");

		if (btn) {
			btn.innerHTML = '<span>Выключить изображения</span>';
		}
	}

	function disableImages() {
		let i;
		for(i = 0; i < imageArray.length; i++) {
			imageArray[i].classList.add('image--hide');
		}
		let n;
		for(n = 0; n < imageBgArray.length; n++) {
			imageBgArray[n].classList.add('hide-bg--active');
		}
		let z;
		for(z = 0; z < hideImageArray.length; z++) {
			hideImageArray[z].classList.add('hide-image--active');
		}

		let m;
		for(m = 0; m < noneImageArray.length; m++) {
			noneImageArray[m].classList.add('none-image--active');
		}
		localStorage.setItem("images", 'false');
		localVarImage = localStorage.getItem("images");
		btn.innerHTML = '<span>Включить изображения</span>';
	}

})();

// Перключаем тему
(function toggleTheme(){

	const body = document.querySelector('.body');
	const btn = document.querySelector('#toggle-theme');
	let localVarContrast = localStorage.getItem("theme");

	if (body && btn) {
		btn.addEventListener('click', toggle);
	}

	// if (localVarImage === null) {
	// 	enableImages();
	// 	localVarImage = localStorage.getItem("images");
	// }

	// if (localStorage.images === 'false') {
	// 	disableImages();
	// 	localVarImage = localStorage.getItem("images");
	// } else {
	// 	enableImages();
	// 	localVarImage = localStorage.getItem("images");

	// }

	if (localVarContrast === null) {
		localStorage.setItem("theme","light");
		localVarContrast = localStorage.getItem("theme");
	}

	if (localVarContrast === 'light') {
		
		body.classList.remove('body--dark');
		body.classList.add('body--light');
	} else {
		body.classList.remove('body--light');
		body.classList.add('body--dark');
	}

	// (function initTheme() {

	// 	if (localVarContrast === 'light'||false||null||undefined) {
	// 		localStorage.setItem("theme","light");
	// 		body.classList.add('body--light');
	// 	} else {
	// 		body.classList.add('body--dark');
	// 	}
	// })();

	function toggle(){
		if (localVarContrast === 'light') {
			localStorage.setItem("theme","dark");
			localVarContrast = localStorage.getItem("theme");
			body.classList.remove('body--light');
			body.classList.add('body--dark');
		} else {
			localStorage.setItem("theme","light");
			localVarContrast = localStorage.getItem("theme");
			body.classList.remove('body--dark');
			body.classList.add('body--light');
		}
	}

})();

(function showPanel() {
	const btn = document.querySelector('.open-panel');
	const panel = document.querySelector('.panel');

	if (btn && panel) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			if (panel.classList.contains('panel--open')) {
				panel.classList.remove('panel--open');
			} else {
				panel.classList.add('panel--open');
			}
		})
	}
})();

function disableHidden (parent, el, status) {
	// const elements = parent.querySelectorAll(el);
	console.log(parent)
	// if (status == true) {
	// 	for (let i = 0; i < elements.length; i++) {
	// 		elements[i].setAttribute("disabled", "disabled");
	// 	}
	// } else {
	// 	for (let i = 0; i < elements.length; i++) {
	// 		elements[i].removeAttribute("disabled");
	// 	}
	// }
}

// localStorage.setItem("myNumber","111");