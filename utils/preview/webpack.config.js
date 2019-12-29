/** @type import('webpack').Configuration */
module.exports = {
  entry: './preview.ts',
  output: {
    filename: 'preview.js'
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader'
      }
    ]
  }
}