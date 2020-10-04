import {terser} from 'rollup-plugin-terser';

export default [
    {
        input: 'src/main.js',
        plugins: [terser()],
        output: {
            file: 'umd/DataStructures.js',
            format: 'umd',
            name: 'DataStructures',
            esModule: false
        }
    },
    {
        input: 'src/main.js',
        plugins: [terser()],
        output: {
            file: 'esm/index.js',
            format: 'esm'
        }
    }
];