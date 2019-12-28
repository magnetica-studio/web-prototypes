/** @type import('webpack').Configuration */
module.exports = {
  entry: './preview.ts',
  output: {
    filename: 'preview.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader'
      }
    ]
  }
}