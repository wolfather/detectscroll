'use strict'

/**
 * @author Israel <so.israelweb@gmail.com>
**/
//export default class DetectScroll {
;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DetectScroll = (function () {
	/**
  * @constructor
  * @param {topHeight} is the property that defines the distance from the top of page 
  *		to make the arrow appear
  * @param {bottomHeight} is the property that defines the distance from the bottom page 
  *		to make the arrow get up
 **/

	function DetectScroll(topHeight, bottomHeight, parentElementHeight) {
		_classCallCheck(this, DetectScroll);

		this.CLASS_FADE_IN = 'arrow-up-fade-in', this.topHeight = topHeight, this.bottomHeight = bottomHeight, this.parentElementHeight = parentElementHeight, this.sumTopBottom = Math.round(this.topHeight + this.BottomHeight), this._d = document, this._body = this._d.body, this._element = this._d.createElement('div');
	}

	/**
  * @desc Check if the page or element has the height greater than 
  * 		@param {topHeight} and @param {bottomHeight}. If it does, 
  *		return 1 (true), otherwise return 0 (false)
  * @return 1 || 0
 **/

	_createClass(DetectScroll, [{
		key: 'CheckHeightPage',
		value: function CheckHeightPage() {
			return this.parentElementHeight > this.topHeight ? 1 : 0;
		}
	}, {
		key: 'SetElementProps',
		value: function SetElementProps() {
			var DEFAULT_NAME = 'up-arrow';
			this.El.id = DEFAULT_NAME;
			this.El.classList.add(DEFAULT_NAME);
		}
	}, {
		key: 'DetectTop',
		value: function DetectTop() {
			return pageYOffset - this.topHeight >= 0 ? 1 : 0;
		}
	}, {
		key: 'SetClassTop',
		value: function SetClassTop() {
			return this.DetectTop() ? this.El.classList.add(this.CLASS_FADE_IN) : this.El.classList.remove(this.CLASS_FADE_IN);
		}
	}, {
		key: 'DetectBottom',
		value: function DetectBottom() {
			//console.log(pageYOffset);
			return pageYOffset >= this.bottomHeight ? 1 : 0;
		}
	}, {
		key: 'SetClassBottom',
		value: function SetClassBottom() {
			var _classToggleBottom = 'arrow-up-bottom-up';
			return this.DetectBottom() ? this.El.classList.add(_classToggleBottom) : this.El.classList.remove(_classToggleBottom);
		}

		/**
   *
   * @param {whereY} screen position Y to where you want to go
   * @return 
  **/

	}, {
		key: 'LockAxisYPosition',
		value: function LockAxisYPosition() {
			var MAXWIDTH_AREA = 800; //1196;

			return innerWidth <= MAXWIDTH_AREA ? this.El.classList.add('inside') : this.El.classList.remove('inside');
		}

		/**
   *
   * @param {whereY} screen position Y to where you want to go
  **/

	}, {
		key: 'scrollUp',
		value: function scrollUp(whereY) {
			var self = this;
			var r = requestAnimationFrame(function () {
				self.scrollUp(whereY);
			});

			//console.log('inside interval: ', pageYOffset);
			if (whereY < pageYOffset - 5) {
				scrollTo(0, pageYOffset - 5);
			} else {
				//console.log('chegou');
				cancelAnimationFrame(r);
			}
		}
	}, {
		key: '__Init__',
		value: function __Init__() {
			var _this = this;

			if (this.CheckHeightPage()) {
				this._body.appendChild(this.El);

				this.SetElementProps();

				this.El.addEventListener('click', function () {
					//scrollTo(0, 0);
					_this.scrollUp(10);
					//this.ToggleArrowUp();
				});

				addEventListener('resize', function () {
					_this.LockAxisYPosition();
				});

				addEventListener('scroll', function () {
					_this.SetClassTop();
					_this.SetClassBottom();
				});
			} else {
				console.log('the arrow isn\'t necessary in this page.');
			}
		}
	}, {
		key: 'El',
		get: function get() {
			return this._element;
		}
	}]);

	return DetectScroll;
})();
//# sourceMappingURL=detect.scroll.js.map
