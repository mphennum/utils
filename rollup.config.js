import { nodeResolve } from '@rollup/plugin-node-resolve';

const PROD = (process.env.BUILD === 'production');

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
		nodeResolve(),
	],
};
