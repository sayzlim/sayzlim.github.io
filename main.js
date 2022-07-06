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
    if (!document.hidden) {
      console.log('State triggered');
      if (typeof _carbonads !== 'undefined')
        _carbonads.refresh();
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

_carbonOptimize.init();