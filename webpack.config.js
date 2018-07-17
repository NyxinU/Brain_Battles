const path = require('path');
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");

module.exports = {
  entry: ['./js/game.js','./js/instructional_page.js'],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  devtool: 'source-maps'
};
