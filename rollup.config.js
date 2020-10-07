import {terser} from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json';

export default {
    input: 'src/main.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        },
        {
            file: pkg.browser,
            format: 'umd',
            name: 'DataStructures'
        }
    ],
    plugins: [
        eslint({
            exclude: [
                'src/styles/**',
            ]
        }),
        babel({
            exclude: ['node_modules/**'],
            babelHelpers: 'bundled'
        }),
        terser()
    ]
};