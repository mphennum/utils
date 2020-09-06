import { expect } from 'chai';
import { array } from '../src';

describe('array', function() {

	describe('#shuffle()', function() {

		it('should return an array', function() {
			let original = [ 1, 2, 3, 4, 5 ];
			let shuffled = array.shuffle(original.slice());

			// console.log({ original, shuffled });
			expect(shuffled).to.be.an('array');
		});

		it('should maintain the same length', function() {
			let original = [ 1, 2, 3, 4, 5 ];
			let shuffled = array.shuffle(original.slice());

			// console.log({ original, shuffled });
			expect(shuffled).to.have.lengthOf(original.length);
		});

		it('should contain all original items', function() {
			let original = [ 1, 2, 3, 4, 5 ];
			let shuffled = array.shuffle(original.slice());

			// console.log({ original, shuffled });
			expect(shuffled).to.have.members(original);
		});

		it('should eventually have a different order', function() {
			this.retries(5);

			let original = [ 1, 2, 3, 4, 5 ];
			let shuffled = array.shuffle(original.slice());

			// console.log({ original, shuffled });
			expect(shuffled).to.not.deep.equal(original);
		});

	});

});
