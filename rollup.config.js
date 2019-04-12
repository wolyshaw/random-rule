export default {
  input: 'index.js',
  output: [
    {
      file: 'lib/index.esm.js',
      format: 'esm',
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'randomRule,'
    }
  ]
}
