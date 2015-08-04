"use strict";

var React  = require("react");
var App    = require("./components/App.js");
var rootEl = document.body;

require("../styles/main.scss");


React.render(
  <App />,
  rootEl
);
