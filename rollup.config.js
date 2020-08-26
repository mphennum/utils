import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

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
		{
			file: 'dist/mph.utils.min.js',
			format: 'iife',
			name: 'mph.utils.min',
			compact: true,
			plugins: [
				terser(),
			],
		}
	],
	plugins: [
		babel({ babelHelpers: 'bundled' }),
		nodeResolve(),
	],
};
