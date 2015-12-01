'use strict';

describe('detect.scroll', ()=> {
	let detect,
	pageHeight = 1400, 
	topHeightElement = 250,
	bottomHeightElement = 300;

	beforeEach(()=> {
		detect = new DetectScroll(topHeightElement, bottomHeightElement, pageHeight);
	});

	it('"Detect" element should be a class element', ()=> {
		expect(detect).toBeTruthy();
	});

	it('Should detect if the pageHeight is greater than @topHeightElement', ()=> {
		expect(detect.CheckHeightPage() === 1).toBe(true);
	})

	it('Should return true if 1 simulating the page scrolling to the top', ()=> {
		expect(detect.DetectTop() === 1).toBe(true);
	})

	it('Should return true if 1 simulating the page scrolling to the bottom', ()=> {
		expect(detect.DetectBottom() === 1).toBe(true);
	})


});