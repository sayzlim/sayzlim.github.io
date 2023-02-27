const _manager = {
	setTheme: function (userColorScheme) {
		localStorage.setItem('user-color-scheme', userColorScheme);
		document
				.querySelector('html')
				.setAttribute('data-site-theme', userColorScheme);
	},
	setUserTheme: function () {
		if (
			localStorage.getItem('user-color-scheme')
		) {
			let userColorScheme = localStorage.getItem('user-color-scheme');
			this.setTheme(userColorScheme);
		}
	},
	resetUserTheme: function() {
		localStorage.removeItem('user-color-scheme');
		document
				.querySelector('html')
				.removeAttribute('data-site-theme');
	},
	init: function () {
		this.setUserTheme();
	},
};

// Observer for Related Posts

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

function setObserver() {
	const relatedPostWrapper = document.querySelectorAll(
		'.related-posts'
	)[0];
	const observer = new IntersectionObserver(function (
		entries
	) {
		const [entry] = entries;

		if (entry.isIntersecting) {
			toggleElement('.hello');
		}
	});

	if(relatedPostWrapper !== undefined) observer.observe(relatedPostWrapper);
}

// Page Visibility API
const _carbonOptimize = {
	isRefreshAble: function () {
		return !(
			typeof document.addEventListener === 'undefined' ||
			this.browserSupport().hidden === undefined
		);
	},
	browserSupport: function () {
		let hidden;
		let visibilityChange;
		if (typeof document.hidden !== 'undefined') {
			// Opera 12.10 and Firefox 18 and later support
			hidden = 'hidden';
			visibilityChange = 'visibilitychange';
		} else if (typeof document.msHidden !== 'undefined') {
			hidden = 'msHidden';
			visibilityChange = 'msvisibilitychange';
		} else if (
			typeof document.webkitHidden !== 'undefined'
		) {
			hidden = 'webkitHidden';
			visibilityChange = 'webkitvisibilitychange';
		}
		return {
			hidden: hidden,
			visibilityChange: visibilityChange,
		};
	},
	handleVisibilityChange: function () {
		const isElementInViewport = function (el) {
			let element = document.querySelector(el);
			let bounding = element.getBoundingClientRect();
			let isVisible;

			if (
				bounding.top >= 0 &&
				bounding.left >= 0 &&
				bounding.right <= window.innerWidth &&
				bounding.bottom <= window.innerHeight
			) {
				isVisible = true;
			} else {
				isVisible = false;
			}
			return isVisible;
		};

		if (!document.hidden) {
			if (
				typeof _carbonads !== 'undefined' &&
				isElementInViewport('#carbonads')
			) {
				_carbonads.refresh();
			}
		}
	},
	init: function () {
		if (this.isRefreshAble()) {
			document.addEventListener(
				this.browserSupport().visibilityChange,
				this.handleVisibilityChange,
				false
			);
		}
	},
};


function loadInits() {
	_carbonOptimize.init();
	setObserver();
}

document.addEventListener('DOMContentLoaded', loadInits);
_manager.init();