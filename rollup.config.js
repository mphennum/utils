import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const IIFE = {
	file: 'dist/utils.js',
	format: 'iife',
	name: 'utils',
};

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
		IIFE,
		{
			...IIFE,
			file: IIFE.file.replace(/\.js$/, '.min.js'),
			compact: true,
			plugins: [ terser() ],
		},
	],
	plugins: [
		babel({ babelHelpers: 'bundled' }),
		nodeResolve(),
	],
};
