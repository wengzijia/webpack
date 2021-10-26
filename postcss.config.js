module.exports = {
    "plugins": [  
        // autoprefixer设置浏览器厂商前缀
        require('autoprefixer')({
            browsers: [
                "> 1%",
                "last 2 versions",
            ]
        })
    ]
}