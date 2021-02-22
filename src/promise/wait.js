let wait = (t) => {
	return new Promise((resolve) => {
		setTimeout(resolve, t);
	});
};

export default wait;
