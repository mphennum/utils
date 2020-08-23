const PROD = (process.env.BUILD === 'production');

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'cjs',
		// format: 'umd',
	},
};
