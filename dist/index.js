'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let shuffle = (arr) => {
    let cur = arr.length;

    while (cur) {
        let rand = Math.floor(Math.random() * cur);
        cur--;

        let tmp = arr[cur];
        arr[cur] = arr[rand];
        arr[rand] = tmp;
    }

    return arr;
};

let array$1 = {
	shuffle,
};

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

let randId = (len) => {
	let id = '';
	do {
		id += Math.floor(Math.random() * 0x7FFFFFFF).toString(36);
		// id += Math.random().toString(36).substr(2);
	} while (len && id.length < len);

	return id.substr(0, len);
};

let string$1 = {
	genId,
	randId,
};

var index = {
	array,
	string,
};

exports.array = array$1;
exports.default = index;
exports.string = string$1;
