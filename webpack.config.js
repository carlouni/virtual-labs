const path = require('path');
module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    output: {
        filename: "./assets/js/main.js",
        path: path.resolve(__dirname, 'virtual-labs'),
    }
  };