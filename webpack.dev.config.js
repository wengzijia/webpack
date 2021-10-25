// 开发环境的配置
const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.config.js');
console.log('dev')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        static: {
            //  托管的静态资源目录
            directory: path.join(__dirname, 'dist'),
        },
        compress: true, // gzip压缩
        port: 8888, // 指定端口
        open: true, // 自动打开浏览器
    },
});