let assert = require('assert').strict;
let rand = require('../dist/rand');

describe('utils', function() {

	describe('#rand()', function() {

		it('no params - should return float from 0 to 1', function() {
			let r = rand();

			// console.log({ r });
			assert.ok(typeof r === 'number' && r >= 0 && r < 1);
		});

		it('string param - should pick a random char from string', function() {
			let str = 'string';
			let r = rand(str);

			// console.log({ r });
			assert.ok(typeof r === 'string' && r.length === 1 && str.includes(r));
		});

		it('array param - should pick a random item from array', function() {
			let arr = [ 1, 2, 3, 4, 5 ];
			let r = rand(arr);

			// console.log({ r });
			assert.ok(typeof r === 'number' && arr.includes(r));
		});

		it('2 num params - should pick a random int from low to high', function() {
			let low = 1;
			let high = 10;
			let r = rand(low, high);

			// console.log({ r });
			assert.ok(typeof r === 'number' && r >= low && r <= high);
		});

	});

});
