let assert = require('assert').strict;
let { number } = require('../dist');

describe('number', function() {

	describe('#toCompact()', function() {

		it('should leave 0 unchanged', function() {
			let num = 0;
			let compact = number.toCompact(num);

			// console.log({ num, compact });
			assert.equal(compact, num.toString());
		});

		it('should leave ints unchanged between 1 and 999', function() {
			let low = 1;
			let high = 999;

			let lowCompact = number.toCompact(low);
			let highCompact = number.toCompact(high);

			// console.log({ low, high, lowCompact, highCompact });
			assert.ok(low.toString() === lowCompact && high.toString() === highCompact);
		});

		it('should maintain negative values', function() {
			let num = -50;
			let compact = number.toCompact(num);

			// console.log({ num, compact });
			assert.equal(compact, num.toString());
		});

		it('should round floats between 0 and 1', function() {
			let num = 0.5;
			let compact = number.toCompact(num);

			// console.log({ num, compact });
			assert.equal(compact, Math.round(num).toString());
		});

		it('should round floats between 1 and 999', function() {
			let low = 1.1;
			let high = 95.5;

			let lowCompact = number.toCompact(low);
			let highCompact = number.toCompact(high);

			// console.log({ low, high, lowCompact, highCompact });
			assert.ok(Math.round(low).toString() === lowCompact && Math.round(high).toString() === highCompact);
		});

		it('should compact thousands, millions, billions, trillions', function() {
			let k = 238000;
			let m = 5420000;
			let b = 7190000000;
			let t = 83120938128312;

			let kCompact = number.toCompact(k);
			let mCompact = number.toCompact(m);
			let bCompact = number.toCompact(b);
			let tCompact = number.toCompact(t);

			// console.log({ k, m, b, t, kCompact, mCompact, bCompact, tCompact });
			assert.ok(
				kCompact.endsWith('k') &&
				mCompact.endsWith('m') &&
				bCompact.endsWith('b') &&
				tCompact.endsWith('t')
			);
		});

	});

	describe('#toOrdinal()', function() {

		it('should end in "th" for numbers between 11 and 13', function() {
			let num = 11;
			let ord = number.toOrdinal(num);

			// console.log({ num, ord });
			assert.match(ord, /th$/);
		});

		it('should end in "st" for numbers ending with 1', function() {
			let num = 1;
			let ord = number.toOrdinal(num);

			// console.log({ num, ord });
			assert.match(ord, /st$/);
		});

		it('should end in "nd" for numbers ending with 2', function() {
			let num = 22;
			let ord = number.toOrdinal(num);

			// console.log({ num, ord });
			assert.match(ord, /nd$/);
		});

		it('should end in "rd" for numbers ending with 3', function() {
			let num = 33;
			let ord = number.toOrdinal(num);

			// console.log({ num, ord });
			assert.match(ord, /rd$/);
		});

	});

});
