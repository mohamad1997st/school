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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                    mozjpeg: {
                        progressive: true,
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    webp: {
                        quality: 75
                    }
                    }
                },
                ],
            }*/
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