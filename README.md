# React-Webpack-Hotloader

Example of how to set up a project that uses the three technologies above!

Use this as boilerplate code to set up a quite amazing developer environment for single page apps.

First build your project for development purposes by entering:
```
npm run dev:build
```
into the terminal when in your project.

You will be able to run your project on a development server by typing the command:
```bash
npm run dev:start
```

You will now be able to visit localhost:8080/bundle and find your app.

## Now what makes this all great

You will be able to to make changes to any of your css/sass or javascript on the front end and have it recompiled and served up without refreshing.

This makes adjusting css heights and font sizes a dream and allows a much smoother efficient development process.

But not only can make changes to the css and the very javascript controlling the app, it won't refresh the page and does not affect any apps holding state so you can continue right where you left off!

## After smooth development: Production

You will be able to recompile the public folder (cutting out webpack-dev-servers and hot-loader code form bundle) and also start the server by running:

```
npm run build && npm start
```
Go to localhost:9009 and find your app!


#Our Example

Our example is a simple clock that increments every second. It has been made using react components, sass, has images and fonts.

Now start making changes and see what happens! If you want some inspiration trying changing the tick function in /src/js/components/app.js to decrement. Notice we still hold our time.

```
tick: function() {
  this.setState({count: this.state.count - 1});
},

```

Now play with the css!




## The boring configuring


#### package.json
```
"devDependencies": {
  "babel-core": "^5.8.20",
  "babel-loader": "^5.3.2",
  "css-loader": "^0.15.6",
  "node-sass": "^3.2.0",
  "react": "^0.13.3",
  "react-hot-loader": "^1.2.8",
  "sass-loader": "^1.0.4",
  "style-loader": "^0.12.3",
  "webpack": "^1.10.5",
  "webpack-dev-server": "^1.10.1"
}

```

You will need webpack to compile all your css and js (note we are saving our components as js files even though they are written like jsx files because babel can handle it!). That being said we our webpack.config.js will require the followingloaders: style, sass (who requires node-sass), css and babel (who require babel-core).

For our development environment we will run a seperate server (webpack-dev-server) who will have react-hot-loader plugged in.

#### webpack.development.config.js and webpack.production.config.js

```
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
```

the entry point is main.js. This is a parent of all the components and calls require("../styles/main.scss") loading in the css.

The compiled version will be made my webpack and be output to public/bundle.js. This and a version of the index.html will be all thats needed for yoru app to run.

## Feedback

If you have questions, problems, improvements, solutions, create an issues or PR and will try help you out. Looking at each modules documentation might be a good idea to to customise your own dev environment and make things more advanced.
