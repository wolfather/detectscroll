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
	constructor(topHeight, bottomHeight, parentElementHeight) {
		this.CLASS_FADE_IN = 'arrow-up-fade-in',

		this.topHeight = topHeight,
		this.bottomHeight = bottomHeight,

		this.parentElementHeight = parentElementHeight,

		this.sumTopBottom = Math.round(this.topHeight + this.BottomHeight),

		this._d = document,
		this._body = this._d.body,
		this._element = this._d.createElement('div')
	}

	/**
	 * @desc Check if the page or element has the height greater than 
	 * 		@param {topHeight} and @param {bottomHeight}. If it does, 
	 *		return 1 (true), otherwise return 0 (false)
	 * @return 1 || 0
	**/
	CheckHeightPage() {
		return this.parentElementHeight > this.topHeight ? 1 : 0;
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
		return pageYOffset - this.topHeight >= 0 ? 1 : 0;
	}

	SetClassTop() {
		return this.DetectTop() ? this.El.classList.add(this.CLASS_FADE_IN) : this.El.classList.remove(this.CLASS_FADE_IN);
	}

	DetectBottom() {
		//console.log(pageYOffset);
		return pageYOffset >= this.bottomHeight ? 1 : 0;
	}

	SetClassBottom() {
		let _classToggleBottom = 'arrow-up-bottom-up';
		return this.DetectBottom() ? this.El.classList.add(_classToggleBottom) : this.El.classList.remove(_classToggleBottom);
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
		if(this.CheckHeightPage()) {
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
				this.SetClassTop();
				this.SetClassBottom();
			});
		}
		else {
			console.log('the arrow isn\'t necessary in this page.');
		}
	}

}



