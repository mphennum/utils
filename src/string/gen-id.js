const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const CHARSLEN = CHARS.length;

let charPos = { };
for (let i = 0; i < CHARSLEN; ++i) {
	charPos[CHARS[i]] = i;
}

let lastId = null;
let genId = () => {
	if (!lastId) {
		lastId = CHARS[0];
		return lastId;
	}

	let i = lastId.length - 1;
	for (; i > -1; i--) {
		let pos = charPos[lastId[i]] + 1;
		if (pos < CHARSLEN) {
			lastId = lastId.substr(0, i) + CHARS[pos] + lastId.substr(i + 1);
			break;
		}

		lastId = lastId.substr(0, i) + CHARS[0] + lastId.substr(i + 1);
	}

	if (i === -1) {
		lastId += CHARS[0];
	}

	return lastId;
};

export default genId;
