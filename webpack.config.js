var webpack = require('webpack');

module.exports = {
  entry: './src',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  output: {
    filename: 'dist/rx-store.min.js',
    libraryTarget: 'umd',
    library: 'rx-store'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src'],
    fallback: __dirname,
    alias: {
      rx: 'rx/dist/rx.lite'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
