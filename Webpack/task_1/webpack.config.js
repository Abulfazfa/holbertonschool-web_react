const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Update the path to where your main JS file is located
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
