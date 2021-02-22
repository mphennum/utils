let waitFor = (validator, interval = 99, timeout = 9999) => {
	return new Promise((resolve, reject) => {
		let start = Date.now();

		let validate = () => {
			if (Date.now() - start > timeout) {
				reject(new Error('waitFor validator timed out.'));
				return;
			}

			if (!validator()) {
				setTimeout(validate, interval);
				return;
			}

			resolve();
		};

		validate();
	});
};

export default waitFor;
