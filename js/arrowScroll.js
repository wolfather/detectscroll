'use strict';

class DetectScroll {

	constructor() {
		const DEFAULT_NAME = 'upArrow';
		
		this._d = document;
		this._body = this._d.body;
		this._element = this._d.createElement('div');
		this._element.id = DEFAULT_NAME;
		this._element.classList.add(DEFAULT_NAME);
		
		//this._element.addEventListener('click', () => this.Click() );
	}

	_qs(p) {return !!this._d.querySelector(p) ? this._d.querySelector(p) : 0;}

	BoundaryTop() {
		return parseInt(this._qs("header").offsetHeight + this._qs(".breadcrumb").offsetHeight + this._qs(".wrapperBanner").offsetHeight) || 100;
	}

	BoundaryBottom() {
		return parseInt(this._qs('.footer').offsetTop - ((this._qs('.footer').offsetHeight * 2) + (this._element.offsetHeight * 2) )) || 100;
	}

	DetectTop() {
		let _classToggleTop = 'fadeIn';
		return pageYOffset - this.BoundaryTop() >= 0 ? this._element.classList.add(_classToggleTop) : this._element.classList.remove(_classToggleTop);
	}

	DetectBottom() {
		let _classToggleBottom = 'bottomUp';
		return pageYOffset >= this.BoundaryBottom() ? this._element.classList.add(_classToggleBottom) : this._element.classList.remove(_classToggleBottom);
	}

	LockAxisYPosition() {
		const MAXWIDTH_ARIA = 800; //1196;
		
		return innerWidth <= MAXWIDTH_ARIA ? this._element.classList.add('inside') : this._element.classList.remove('inside');
	}

	__Init__() {
		this._body.appendChild(this._element);

		this._element.addEventListener('click', () => {
			this.Click();
			this.ToggleArrowUp();
		}, false);

		window.addEventListener('resize', () => {
			this.LockAxisYPosition();
		}, false);

		window.addEventListener('scroll', () => {
			this.DetectTop();
			this.DetectBottom();
		});
	}


//experimental
	get ArrowElement() {
		//console.log('getArrowElement function');
		return this._element;
	}
	Click(fnCallback) {
		//console.log('teste');
		return typeof fnCallback === 'function' ? fnCallback : 0;
	}
	ToggleArrowUp() {
		const CLASS_TOGGLE_FADE = 'fadeIn';
		return this._element.classList.toggle(CLASS_TOGGLE_FADE);
	}

}
let s = new DetectScroll();
s.__Init__();