import { expect } from 'chai';
import { randId, rand, seqId } from '../src';

describe('utils', function() {

	describe('#randId()', function() {

		it('should return a string with length between 4 and 7', function() {
			let id = randId();

			// console.log({ id });
			expect(id).to.have.lengthOf.within(3, 8);
		});

		it('should have the correct length with a number param', function() {
			let len = 14;
			let id = randId(len);

			// console.log({ id });
			expect(id).to.have.lengthOf(len);
		});

	});

	describe('#rand()', function() {

		it('should return float from 0 to 1', function() {
			let r = rand();

			// console.log({ r });
			expect(r).to.be.a('number').and.to.be.at.least(0).and.to.be.below(1);
		});

		it('should pick a random char from a string param', function() {
			let str = 'string';
			let r = rand(str);

			// console.log({ str, r });
			expect(r).to.be.a('string').and.to.have.lengthOf(1);
			expect(str).to.include(r);
		});

		it('should pick a random item from an array param', function() {
			let arr = [ 1, 2, 3, 4, 5 ];
			let r = rand(arr);

			// console.log({ arr, r });
			expect(r).to.be.a('number');
			expect(arr).to.include(r);
		});

		it('should pick a random int from low to high number params', function() {
			let low = 1;
			let high = 4;
			let r = rand(low, high);

			// console.log({ low, high, r });
			expect(r).to.be.a('number').and.to.be.within(low, high);
		});

	});

	describe('#seqId()', function() {

		it('should generate sequential ids starting with "a"', function() {
			let id = seqId();
			let id2 = seqId();

			// console.log({ id, id2 });
			expect(id).to.equal('a');
			expect(id2).to.equal('b');
		});

		it('should generate sequential ids starting with "aaa" with number param of 3', function() {
			let id = seqId(3);
			let id2 = seqId();

			// console.log({ id, id2 });
			expect(id).to.equal('aaa');
			expect(id2).to.equal('aab');
		});

		it('should generate sequential ids starting with "ZZ0" with string param of "ZZZ"', function() {
			let id = seqId('ZZZ');
			let id2 = seqId();

			// console.log({ id, id2 });
			expect(id).to.equal('ZZ0');
			expect(id2).to.equal('ZZ1');
		});

	});

});
