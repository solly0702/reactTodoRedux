var express = require('express');
var app = express();
var path = require('path');

var webpack = require("webpack");
var config = require("./webpack.config");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{ noInfo: true, historyApiFallback: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, './bower_components')));

var server = app.listen(8000, function() {
  console.log("listening on port: 8000");
});
