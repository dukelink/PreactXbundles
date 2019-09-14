// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import gzipPlugin from 'rollup-plugin-gzip'

export default [{
  input: 'src/preact.iife.js',
  output: {
    file: 'dist/preact.iife.js',
    format: 'iife',
    name: 'preact'
  },
  plugins: [
    resolve(),
    gzipPlugin() // Not used at present, but useful to see net size when downloaded from our server w/ gzip support
  ]
}]