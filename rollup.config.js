import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
	input: 'src/index.js',
	output: [
		{
			dir: 'dist',
			// file: 'dist/index.js',
			format: 'cjs',
			preserveModules: true,
			exports: 'auto',
		},
		{
			file: 'dist/mph.utils.js',
			// format: 'umd',
			format: 'iife',
			name: 'mph.utils',
		},
	],
	plugins: [
		babel({ babelHelpers: 'bundled' }),
		nodeResolve(),
	],
};
