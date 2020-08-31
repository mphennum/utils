let toCompact = (num) => {
	let abs = Math.abs(num);

	if (abs < 1) { // small numbers
		return Math.round(num).toString();
	}

	abs = Math.round(abs); // necessary for large numbers, dont use >> 0

	let thousands = 0;
	while (abs > 999 && thousands < 4) {
		abs /= 1000;
		++thousands;
	}

	let post;
	if (!thousands) {
		post = '';
	} else if (thousands < 2) {
		post = 'k'; // thousand
	} else if (thousands < 3) {
		post = 'm'; // million
	} else if (thousands < 4) {
		post = 'b'; // billion
	} else { // thousands > 3
		post = 't'; // trillion
	}

	let decimals;
	if (abs > 99) {
		decimals = 0;
	} else if (abs > 9) {
		decimals = 1;
	} else {
		decimals = 2;
	}

	return (((num < 1) ? -1 : 1) * abs).
		toFixed(decimals).
		replace(/\.0+$/, '').
		replace(/(\.[1-9])0$/, '$1') +
		post
	;
};

export default toCompact;
