const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log('common')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin.js");
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
                }, 'css-loader','postcss-loader'],

            },
            {
                test: /\.less$/,
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader,  
                    options: {
                        esModule: false   // 关闭es6模块化导出
                    }
                }, 'css-loader','postcss-loader','less-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','postcss-loader','sass-loader'],
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
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
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
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{
            // 修正vue导的入路径，导入完整的Vue框架
            'vue$':"vue/dist/vue.js",
            //  配置路径别名@，方便导入
            // @代表src目录
            '@': path.join(__dirname, 'src'),
            // @api代表api目录
            '@api': path.join(__dirname, 'src/api'),
            //  @util代表util目录
            '@util': path.join(__dirname, 'src/util'),
        },
        // 可以省略js、json、vue 的后缀,按顺序匹配
        extensions: ['.js', '.json', '.vue'],
    }
}