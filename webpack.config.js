const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  //build時に追加で行う処理
  module: {
    rules: [
      {
        //webpackさん、.ts'で終わるようなパスに出会ったら、bundleファイルに追加する前にts-loaderで変換してください。
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}
