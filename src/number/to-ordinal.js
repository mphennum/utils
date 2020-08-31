let toOrdinal = (num) => {
	let ord;
	let abs = Math.abs(num);
	let rem = abs % 100;

	if (rem < 11 || rem > 13) {
		rem = abs % 10;

		if (rem === 1) {
			ord = 'st';
		} else if (rem === 2) {
			ord = 'nd';
		} else if (rem === 3) {
			ord = 'rd';
		}
	}

	return `${ num }${ (ord || 'th') }`;
};

export default toOrdinal;
