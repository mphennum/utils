let assert = require('assert').strict;
let { date } = require('../dist');

describe('date', function() {

	describe('#format()', function() {

		it('should format as "0000-00-00T00:00:00.000+00:00" without a format param', function() {
			let format = date.format();

			// console.log({ format });
			assert.match(format, /^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}\+\d{2}\:\d{2}$/);
		});

		it('should preserve escaped characters', function() {
			let format = date.format(Date.now(), '\\PP');

			// console.log({ format });
			assert.match(format, /^P\+\d{2}\:\d{2}$/);
		});

		it('should allow custom formats', function() {
			let format = date.format(Date.now(), 'Y-m-d');

			// console.log({ format });
			assert.match(format, /^\d{4}\-\d{2}\-\d{2}$/);
		});

		it('should have a different output for utc', function() {
			const FORMAT = 'Y-m-d H:i:s';
			let format = date.format(0, FORMAT, false);
			let utcFormat = date.format(0, FORMAT, true);

			// console.log({ format, utcFormat });
			assert.notEqual(format, utcFormat);
		});

	});

});
