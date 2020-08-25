import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
	input: 'src/index.js',
	output: {
		dir: 'dist',
		// file: 'dist/index.js',
		format: 'cjs',
		// format: 'iife',
		preserveModules: true,
		exports: 'auto',
	},
	plugins: [
		babel({ babelHelpers: 'bundled' }),
		nodeResolve(),
	],
};
