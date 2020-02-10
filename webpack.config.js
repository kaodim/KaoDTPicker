var path = require('path')

module.exports = {
  entry: './src/index.js',
  // entry: {
  //   index: './src/index.js',
  //   app: './src/app.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build|dist)/,
        loader: 'babel-loader',
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['env']
        //   }
        // }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // }
    ]
  },
  externals: {
    react: 'commonjs react'
  },
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname,'public')
  }
}