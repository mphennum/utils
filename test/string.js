let assert = require('assert').strict;
let deaccent = require('../dist/string/deaccent');
let toSlug = require('../dist/string/to-slug');

describe('string', function() {

	describe('#deaccent()', function() {

		it('should remove unicode chars', function() {
			let orig = 'Fëanor';
			let str = deaccent(orig);

			// console.log({ orig, str });
			assert.equal(str, 'Feanor');
		});

		it('should leave a non unicode string unchanged', function() {
			let orig = 'Where the leave fall not. Land of my people, forever.';
			let str = deaccent(orig);

			// console.log({ orig, str });
			assert.equal(str, orig);
		});

	});

	describe('#toSlug()', function() {

		it('should replace spaces with dashes', function() {
			let orig = 'word with spaces';
			let slug = toSlug(orig);

			// console.log({ orig, slug });
			assert.equal(slug, 'word-with-spaces');
		});

		it('should convert to lowercase', function() {
			let orig = '2 Be Slugged';
			let slug = toSlug(orig);

			// console.log({ orig, slug });
			assert.equal(slug, '2-be-slugged');
		});

		it('should start and end with letters of numbers', function() {
			let orig = ' word with spaces-';
			let slug = toSlug(orig);

			// console.log({ orig, slug });
			assert.equal(slug, 'word-with-spaces');
		});

		it('should deaccent', function() {
			let orig = 'Fëanor';
			let slug = toSlug(orig);

			// console.log({ orig, slug });
			assert.equal(slug, 'feanor');
		});

	});

});
