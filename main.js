let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
	if (scrollPos > 500) {
		toggleElement('.hello');
	}
}

function toggleElement(el) {
	el = document.querySelector(el);

	let isToggleAble =
		!el.hasAttribute('show') &&
		!sessionStorage.getItem(el.className);

	if (isToggleAble) {
		el.toggleAttribute('show');
	}
}

function dismissElement(el) {
	el = document.querySelector(el);
	sessionStorage.setItem(el.className, 'false');
	el.toggleAttribute('show');
}

document.addEventListener('scroll', function (e) {
	lastKnownScrollPosition = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function () {
			doSomething(lastKnownScrollPosition);
			ticking = false;
		});

		ticking = true;
	}
});