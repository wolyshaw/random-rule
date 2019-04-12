export default {
  input: 'index.js',
  output: [
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'randomRule',
    }
  ],
}
