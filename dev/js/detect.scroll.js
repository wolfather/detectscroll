'use strict';

/**
 * @author Israel <so.israelweb@gmail.com>
**/
//export default class DetectScroll {
class DetectScroll {
	/**
	 * @constructor
	 * @param {topHeight} is the property that defines the distance from the top of page 
	 *		to make the arrow appear
	 * @param {bottomHeight} is the property that defines the distance from the bottom page 
	 *		to make the arrow get up
	**/
	constructor(topHeight, bottomHeight) {
		this.CLASS_FADE_IN = 'arrow-up-fade-in',

		this.topHeight = topHeight,
		this.bottomHeight = bottomHeight,

		this._d = document,
		this._body = this._d.body,
		this._element = this._d.createElement('div')
	}

	get El() {
		return this._element;
	}

	SetElementProps() {
		const DEFAULT_NAME = 'up-arrow';
		this.El.id = DEFAULT_NAME;
		this.El.classList.add(DEFAULT_NAME);
	}

	DetectTop() {
		return pageYOffset - this.topHeight >= 0 ? this.El.classList.add(this.CLASS_FADE_IN) : this.El.classList.remove(this.CLASS_FADE_IN);
	}

	DetectBottom() {
		let _classToggleBottom = 'bottomUp';
		//console.log(pageYOffset);
		return pageYOffset >= this.bottomHeight ? this.El.classList.add(_classToggleBottom) : this.El.classList.remove(_classToggleBottom);
	}

	/**
	 *
	 * @param {whereY} screen position Y to where you want to go
	 * @return 
	**/
	LockAxisYPosition() {
		const MAXWIDTH_AREA = 800; //1196;
		
		return innerWidth <= MAXWIDTH_AREA ? this.El.classList.add('inside') : this.El.classList.remove('inside');
	}

	/**
	 *
	 * @param {whereY} screen position Y to where you want to go
	**/
	scrollUp(whereY) {
		let self = this;
		let r = requestAnimationFrame(() => {
			self.scrollUp(whereY);
		});
		
		//console.log('inside interval: ', pageYOffset);
		if(whereY < pageYOffset -5) {
			scrollTo(0, pageYOffset - 5);
		}
		else{
			//console.log('chegou');
			cancelAnimationFrame(r);
		}

	}

	__Init__() {
		this._body.appendChild(this.El);

		this.SetElementProps();

		this.El.addEventListener('click', ()=> {
			//scrollTo(0, 0);
			this.scrollUp(10);
			//this.ToggleArrowUp();
		});

		addEventListener('resize', ()=> {
			this.LockAxisYPosition();
		});

		addEventListener('scroll', ()=> {
			this.DetectTop();
			this.DetectBottom();
		});
	}

}



