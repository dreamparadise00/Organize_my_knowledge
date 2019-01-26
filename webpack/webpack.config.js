const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  mode:'development',
  entry:{
    'xx':'./src/index.js'
  },
  output:{

    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
    publicPath:"http://localhost:8081/"
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
    new ExtractTextPlugin("index.css")
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        // use:['style-loader','css-loader']
        use:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:"css-loader"
        })
      },
      {
        test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:5000,
                            outputPath:'img/'
                        }
                    }
                ]
      },
      {
        test:/\.(htm|html)$/i,
        loader:'html-withimg-loader'
      },
      {
        test:/\.scss/,
        // use:[
        //   {
        //     loader:'style-loader'
        //   },
        //   {
        //     loader:'css-loader'
        //   },
        //   {
        //     loader:'sass-loader'
        //   }
        // ]
        use:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:["css-loader","sass-loader"]
        })
      }
    ]
  },
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'localhost',
    compress:true,
    port:8081,
    open:true,
    hot:true
  }
}
