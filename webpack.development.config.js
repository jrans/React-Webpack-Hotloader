var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      "./src/js/main.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader']},
        { test: /\.scss$/, loader: 'style!css!sass'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
