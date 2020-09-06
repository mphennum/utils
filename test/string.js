import { expect } from 'chai';
import { string } from '../src';

describe('string', function() {

	describe('#deaccent()', function() {

		it('should remove unicode chars', function() {
			let orig = 'Fëanor';
			let str = string.deaccent(orig);

			// console.log({ orig, str });
			expect(str).to.equal('Feanor');
		});

		it('should leave a non unicode string unchanged', function() {
			let orig = 'Where the leave fall not. Land of my people, forever.';
			let str = string.deaccent(orig);

			// console.log({ orig, str });
			expect(orig).to.equal(str);
		});

	});

	describe('#toSlug()', function() {

		it('should replace spaces with dashes', function() {
			let orig = 'word with spaces';
			let slug = string.toSlug(orig);

			// console.log({ orig, slug });
			expect(slug).to.equal('word-with-spaces');
		});

		it('should convert to lowercase', function() {
			let orig = '2 Be Slugged';
			let slug = string.toSlug(orig);

			// console.log({ orig, slug });
			expect(slug).to.equal('2-be-slugged');
		});

		it('should start and end with letters of numbers', function() {
			let orig = ' word with spaces-';
			let slug = string.toSlug(orig);

			// console.log({ orig, slug });
			expect(slug).to.equal('word-with-spaces');
		});

		it('should deaccent', function() {
			let orig = 'Fëanor';
			let slug = string.toSlug(orig);

			// console.log({ orig, slug });
			expect(slug).to.equal('feanor');
		});

	});

});
