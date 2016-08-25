import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  plugins: [
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-2']
    }),
    replace({
      'process.env.NODE_DEBUG': false,
      'process.env.NODE_ENV': 'production'
    })
  ],
  moduleName: 'RxStore',
  moduleId: 'rx-store',
  targets: [
    {format: 'umd', dest: 'dist/rx-store.umd.js'},
    {format: 'iife', dest: 'dist/rx-store.browser.js'},
    {format: 'amd', dest: 'dist/rx-store.amd.js'},
    {format: 'cjs', dest: 'dist/rx-store.cjs.js'},
    {format: 'es', dest: 'dist/rx-store.es-modules.js'}
  ]
}
