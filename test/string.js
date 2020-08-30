let assert = require('assert').strict;
let deaccent = require('../dist/string/deaccent');

describe('string', function() {

	describe('#deaccent()', function() {

		it('should remove unicode chars', function() {
			let str = deaccent('Æ');

			// console.log({ str });
			assert.equal(str, 'AE');
		});

	});

});
