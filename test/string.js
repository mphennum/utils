let assert = require('assert').strict;
let deaccent = require('../dist/string/deaccent');

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

});
