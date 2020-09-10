const path= require('path')
const htmlWebpackPlugin= require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
    entry:path.join(__dirname, './src/main.js' ),
    output:{
        path: path.join(__dirname, './dist' ),
        filename: 'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename:"index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules:[
            { test:/\.css$/, use:["style-loader",'css-loader']},
            { test:/\.js$/, use:"babel-loader", exclude:/node_modules/},
            { test:/\.(jpg|png|gif|bmp|jpeg)$/, use:"url-loader"},
            { test:/\.vue$/, use:"vue-loader"},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
        ]
    },
    resolve:{
        alias:{
            "^vue$":"vue/dist/vue.js"
        }
    }
}