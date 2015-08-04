var webpack = require('webpack');

module.exports = {
    entry: [
      "./src/js/main.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.scss$/, loader: 'style!css!sass'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
