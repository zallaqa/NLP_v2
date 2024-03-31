const path = require("path") 
const webpack = require("webpack"),
 HtmlWebpackPlugin = require('html-webpack-plugin'),
 { CleanWebpackPlugin } = require('clean-webpack-plugin'),
 CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
 TerserPlugin = require("terser-webpack-plugin"),
 


module.exports = {
    mode: "development",
    entry :"./src/client/index.js",
    devtool:'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client',
        clean: true,
    },
    module:{
        rules:[
           {
            test: '/\.js$',
            exclude : /node_modules/,
            loader : "babel-loader"
           },
           {
            test: /\.s[ac]ss$/i,
            use:["style-loader","css-loader","sass-loader"],
           }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
    }
    
    ),
    new CleanWebpackPlugin({
        // Simulate the removal of files
        dry: true,
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
        }),
],
   optimization: {
    minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
    ],
    minimize: true,
     },

};