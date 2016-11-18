const path = require('path');
const webpack = require('webpack');

const ENTRY_FILE = path.join(__dirname, '/src/main.js');
const OUTPUT_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: ENTRY_FILE,

  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.less']
  },

  plugins: [
      // new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};
