// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// module.exports = {
//   plugins: [
//     // your custom plugins
//   ],
//   module: {
//     rules: [
//       // add your custom rules.
//     ],
//   },
// };

var path = require('path')

module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'index.js',
    filename: '[name].js',
    // libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
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
  // externals: {
  //   react: 'commonjs react'
  // },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname,'public')
  }
}
