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
        filename: "main.js",
        publicPath: ""
    },

    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 9870,
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
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
              },

            /*{
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images/",
                        },
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
                            outputPath: "/fonts",
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
        new HtmlWebapckPlugin({ 
            filename: "signin.html",
            template: "./src/signin.html",
        }),
        new HtmlWebapckPlugin({ 
            filename: "signup.html",
            template: "./src/signup.html",
        }),
        new HtmlWebapckPlugin({ 
            filename: "st6page.html",
            template: "./src/st6page.html",
        }),
        new HtmlWebapckPlugin({ 
            filename: "st7page.html",
            template: "./src/st7page.html",
        }),
        new MiniCssExtractPlugin({filename: "css/style.css"}),

        new OptimizeCssAssetsWepackPlugin({}),
    ],
};