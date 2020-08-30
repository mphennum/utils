const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const CHARSLEN = CHARS.length;
const FIRSTCHAR = CHARS[0];
const LASTCHAR = CHARS[CHARSLEN - 1];

let charPos = { };
for (let i = 0; i < CHARSLEN; ++i) {
	charPos[CHARS[i]] = i;
}

let lastId = null;
let seqId = (min) => {
	if (min) {
		if (typeof min === 'number' && (!lastId || lastId?.length < min)) {
			lastId = '';
			for (let i = 0; i < min - 1; i++) {
				lastId += LASTCHAR;
			}
		} else if (typeof min === 'string') {
			for (let i = 0; i < min.length; i++) {
				if (!CHARS.includes(min[i])) {
					throw new Error(`Invalid char "${ min[i] }"`);
				}
			}

			lastId = min;
		}
	}

	if (!lastId) {
		lastId = FIRSTCHAR;
		return lastId;
	}

	let i = lastId.length - 1;
	for (; i > -1; i--) {
		let pos = charPos[lastId[i]] + 1;
		if (pos < CHARSLEN) {
			lastId = lastId.substr(0, i) + CHARS[pos] + lastId.substr(i + 1);
			break;
		}

		lastId = lastId.substr(0, i) + FIRSTCHAR + lastId.substr(i + 1);
	}

	if (i === -1) {
		lastId += FIRSTCHAR;
	}

	return lastId;
};

export default seqId;
