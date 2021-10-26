console.log('HELLO webpack')

// devtool: 'source-map'
// 导入css模块
import css from "./css/index.css";

// 导入less模块
import less from "./css/index.less";

// 导入scss模块
import scss from "./css/index.scss";

import img from './images/base64.png';
import picture from './images/1.png';


import  es from './lib/index2.js';


// 导入es6模块 
import  es6 from "./lib/es6.js";

document.getElementById('img').onclick = function (){
    document.getElementById('picture').src = img
}


document.getElementById('btn').onclick = function (){
    document.getElementById('picture').src = picture
}