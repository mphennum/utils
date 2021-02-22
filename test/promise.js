import { expect } from 'chai';
import { promise } from '../src';

describe('string', function() {

	describe('#wait()', function() {

		it('should wait at least x milliseconds', function() {
			let t = 5000;
			this.timeout(t * 2);

			let start = Date.now();
			return promise.wait(t).then(() => {
				let dur = Date.now() - start;

				// console.log({ dur, t });
				expect(dur).to.be.above(t);
			});
		});

	});

	describe('#waitFor()', function() {

		it('should wait for validator to pass', function() {
			let t = 2000;
			this.timeout(t * 3);

			let valid = false;
			let start = Date.now();
			return promise.waitFor(() => {
				valid = (Date.now() - start > t);
				return valid;
			}, 99, t * 2).then(() => {
				// console.log({ valid, t });
				expect(valid).to.be.true;
			});
		});

	});

});
