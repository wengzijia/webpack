const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log('common')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: "./src/main.js", // 入口
    output: { // 打包后构建目录
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            // 遇到.css结尾的文件，需要交给style-loader和css-loader来处理
            // loader加载顺序：从右到左编写
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader'],

            },
            {
                test: /\.less$/,
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader', 'less-loader','sass-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        // 文件大小小于10kb => 打包成base64格式
                        // 否则把图片打包成一个二进制文件
                        // hash就是一个唯一的字符串，类似主键
                        limit: 1024 * 10, // 10kb
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'images/',
                    }
                }]
            },
            {
                test: /\.(ttf|ttf2|woff|woff2|eot|svg)$/,
                use: [{
                    loader: "url-loader"
                }]
            },
            {   // es6打包成es5语法
                test: /\.js$/,
                // exclude：排除指定目录不需要打包处理
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "vue3webpack5",
            template: "./public/index.html",// 把public目录下的index.html打包到dist目录下
            favicon: './public/favicon.ico' // 把public目录下的favicon.ico打包到dist目录下
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // 每次打包重命名资源，可以防止客户端缓存
            filename: "[name]-[hash:8].css",
        })
    ]
}