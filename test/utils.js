let assert = require('assert').strict;
let rand = require('../dist/rand');
let randId = require('../dist/rand-id');

describe('utils', function() {

	describe('#randId()', function() {

		it('no params - should return a string with length between 4 and 7', function() {
			let id = randId();

			// console.log({ id });
			assert.ok(id.length >= 4 && id.length <= 7);
		});

		it('length param - should have the correct length', function() {
			let len = 14;
			let id = randId(len);

			// console.log({ id });
			assert.equal(id.length, len);
		});

	});

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
			let high = 4;
			let r = rand(low, high);

			// console.log({ r });
			assert.ok(typeof r === 'number' && r >= low && r <= high);
		});

	});

});
