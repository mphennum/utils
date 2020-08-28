let assert = require('assert');
let shuffle = require('../dist/array/shuffle');

describe('array', function() {
	describe('#shuffle', function() {
		let original = [ 1, 2, 3, 4, 5 ];
		let shuffled = shuffle(original);

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
	});
});
