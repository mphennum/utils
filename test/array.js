let assert = require('assert');
let shuffle = require('../dist/array/shuffle');

describe('array', function() {
	describe('#shuffle()', function() {
		let original = [ ];
		for (let i = 0; i < 100; i++) {
			original[i] = i;
		}

		let shuffled = shuffle(original.slice());

		it('should return an array', function() {
			assert.equal(shuffled instanceof Array, true);
		});

		it('should maintain the same length', function() {
			assert.equal(shuffled.length, original.length);
		});

		it('should contain all original items', function() {
			let missing = false;
			for (let item of original) {
				if (!shuffled.includes(item)) {
					missing = true;
					break;
				}
			}

			assert.ok(!missing);
		});

		it('should usually have a different order', function() {
			let sameOrder = true;
			for (let i = 0; i <  original.length; i++) {
				if (shuffled[i] !== original[i]) {
					sameOrder = false;
					break;
				}
			}

			assert.ok(!sameOrder);
		});
	});
});
