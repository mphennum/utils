let assert = require('assert').strict;
let randId = require('../dist/rand-id');
let rand = require('../dist/rand');
let seqId = require('../dist/seq-id');

describe('utils', function() {

	describe('#randId()', function() {

		it('should return a string with length between 4 and 7', function() {
			let id = randId();

			// console.log({ id });
			assert.ok(id.length >= 4 && id.length <= 7);
		});

		it('should have the correct length with a number param', function() {
			let len = 14;
			let id = randId(len);

			// console.log({ id });
			assert.equal(id.length, len);
		});

	});

	describe('#rand()', function() {

		it('should return float from 0 to 1', function() {
			let r = rand();

			// console.log({ r });
			assert.ok(typeof r === 'number' && r >= 0 && r < 1);
		});

		it('should pick a random char from a string param', function() {
			let str = 'string';
			let r = rand(str);

			// console.log({ r });
			assert.ok(typeof r === 'string' && r.length === 1 && str.includes(r));
		});

		it('should pick a random item from an array param', function() {
			let arr = [ 1, 2, 3, 4, 5 ];
			let r = rand(arr);

			// console.log({ r });
			assert.ok(typeof r === 'number' && arr.includes(r));
		});

		it('should pick a random int from low to high number params', function() {
			let low = 1;
			let high = 4;
			let r = rand(low, high);

			// console.log({ r });
			assert.ok(typeof r === 'number' && r >= low && r <= high);
		});

	});

	describe('#seqId()', function() {

		it('should generate sequential ids starting with "a"', function() {
			let id = seqId();
			let id2 = seqId();

			// console.log({ id, id2 });
			assert.ok(id === 'a' && id2 === 'b');
		});

		it('should generate sequential ids starting with "aaa" with number param of 3', function() {
			let id = seqId(3);
			let id2 = seqId();

			// console.log({ id, id2 });
			assert.ok(id === 'aaa' && id2 === 'aab');
		});

		it('should generate sequential ids starting with "ZZ0" with string param of "ZZZ"', function() {
			let id = seqId('ZZZ');
			let id2 = seqId();

			// console.log({ id, id2 });
			assert.ok(id === 'ZZ0' && id2 === 'ZZ1');
		});

	});

});
