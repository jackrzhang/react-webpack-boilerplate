const { BUILD_DIR, SRC_DIR } = require('./constants');

const config = {
  name: 'production',
  entry: [
    'babel-polyfill',
    `${SRC_DIR}index.js`
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        include: SRC_DIR,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      }
    ]
  },
  devtool: 'source-map'
};

module.exports = config;
