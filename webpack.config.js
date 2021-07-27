var path = require("path");
var HtmlWebapckPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsWepackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

    entry: {
        app:'./src/index.js'
    },

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"
    },

    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 3425,
        writeToDisk: true,
        open: true,
    },

    module: {
        rules: [

            /*{
                test: require.resolve('jquery'),
                use: [{
                  loader: 'expose-loader',
                  options: 'jQuery'
                }, {
                  loader: 'expose-loader',
                  options: '$'
                }]
            },*/
              
        
            {
                test:/\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options : {
                            minimize: true,
                        }
                    }
                ]
            },

            {
                test:/\.css$/,
                use: [
                    
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },

            /*{
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                },
            },*/

            /*{
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },*/

            /*{
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: 
                [
                    {
                        loader: "file-loader",
                        options:
                        {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                    
                ]
            },*/
        ]
    },

    plugins : [
        new HtmlWebapckPlugin({ 
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebapckPlugin({ 
            filename: "aboutus.html",
            template: "./src/aboutus.html",
        }),
        new HtmlWebapckPlugin({ 
            filename: "contact.html",
            template: "./src/contact.html",
        }),

        new MiniCssExtractPlugin({filename: "css/style.css"}),

        new OptimizeCssAssetsWepackPlugin({}),
    ],
};