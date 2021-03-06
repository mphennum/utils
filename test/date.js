import { expect } from 'chai';
import { date } from '../src';

describe('date', function() {

	describe('#format()', function() {

		it('should format as "0000-00-00T00:00:00.000+00:00" without a format param', function() {
			let format = date.format();

			// console.log({ format });
			expect(format).to.match(/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}\+\d{2}\:\d{2}$/);
		});

		it('should preserve escaped characters', function() {
			let format = date.format(Date.now(), '\\PP');

			// console.log({ format });
			expect(format).to.match(/^P\+\d{2}\:\d{2}$/);
		});

		it('should allow custom formats', function() {
			let format = date.format(Date.now(), 'Y-m-d');

			// console.log({ format });
			expect(format).to.match(/^\d{4}\-\d{2}\-\d{2}$/);
		});

		it('should have a different output for utc', function() {
			const FORMAT = 'Y-m-d H:i:s';
			let format = date.format(0, FORMAT, false);
			let utcFormat = date.format(0, FORMAT, true);

			// console.log({ format, utcFormat });
			expect(format).to.not.equal(utcFormat);
		});

	});

	describe('#toTimeAgo()', function() {

		it('should return < 60s as "now"', function() {
			let timeAgo = date.toTimeAgo(Date.now() - 30000);

			// console.log({ timeAgo });
			expect(timeAgo).to.equal('now');
		});

		it('should return < 1h in minutes', function() {
			let timeAgo = date.toTimeAgo(Date.now() - 1800000);

			// console.log({ timeAgo });
			expect(timeAgo).to.match(/^\d+m$/);
		});

		it('should return < 1d in hours', function() {
			let timeAgo = date.toTimeAgo(Date.now() - 43200000);

			// console.log({ timeAgo });
			expect(timeAgo).to.match(/^\d+h$/);
		});

		it('should return < 1y in days', function() {
			let timeAgo = date.toTimeAgo(Date.now() - 15768000000);

			// console.log({ timeAgo });
			expect(timeAgo).to.match(/^\d+d$/);
		});

		it('should return > 1y in years', function() {
			let timeAgo = date.toTimeAgo(Date.now() - 61536000000);

			// console.log({ timeAgo });
			expect(timeAgo).to.match(/^\d+y$/);
		});

		it('should work for long mode', function() {
			let timeAgo = date.toTimeAgo(Date.now() - 61536000000, true);

			// console.log({ timeAgo });
			expect(timeAgo).to.match(/^\d+\syears?$/);
		});

	});

});
