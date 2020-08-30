import deaccent from './deaccent';

let toSlug = (str) => {
	return deaccent(str).
		toLowerCase().
		replace(/[^a-z0-9]+/g, '-').
		replace(/^\-|\-$/g, '')
	;
};

export default toSlug;
