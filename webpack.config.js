const path = require('path');

module.exports = {
  entry: './js/game.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  devtool: 'source-maps'
};
