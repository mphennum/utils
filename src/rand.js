let rand = (...args) => {
	// 0 args

	if (!args.length) {
		return Math.random(); // float from 0 (inc) to 1 (exc)
	}

	// 1 arg

	let x = args[0];
	if (args.length < 2) {
		if (Array.isArray(x) || typeof x === 'string') { // arr / str
			return x.length ? x[rand(0, x.length - 1)] : null; // rand item / char
		}

		throw new Error('Expected single Array or String param for rand.');
	}

	// 2 args

	let y = args[1];
	if (args.length < 3) {
		if (typeof x === 'number' && typeof y === 'number') { // 2 ints
			return Math.floor(Math.random() * (y - x + 1) + x); // rand int from x (inc) to y (inc)
		}

		throw new Error('Expected two Number params for rand..');
	}

	// invalid

	throw new Error('Expected less than three params for rand.');
};

export default rand;
