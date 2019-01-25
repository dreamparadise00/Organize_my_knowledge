const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  mode:'development',
  entry:{
    'xx':'./src/index.js'
  },
  output:{

    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:'./src/test.html'
    }),
    // new ExtractTextPlugin("index.css")
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
        // use:ExtractTextPlugin.extract({
        //   fallback:"style-loader",
        //   use:"css-loader"
        // })
      }
    ]
  },
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'localhost',
    compress:true,
    port:8081
  }
}
