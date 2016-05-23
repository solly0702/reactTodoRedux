var debug = process.env.NODE_ENV !== "production"   //NODE_ENV=production webpack
var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: debug ? "inline-source-map" : null,    // give line-number for debugging
  entry: [
    // "webpack/hot/only-dev-server",    // "only" prevents reload on syntax errors
    'webpack-hot-middleware/client',
    "./client/app-client.js"   // app's entry point
  ],
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    modulesDirectories: ["node_modules", "client", "bower_components"],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|app-server.js)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0", "react-hmre"],
          plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy", "transform-react-constant-elements"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      { test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.Resolt_fverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ]
};
