const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'final'),
        filename: "final.js"
    },
    module : {
        rules: [{
            test: /\.css$/,
            use:[{
                loader: "style-loader"
            },{
                loader: "css-loader"
            }]
        }]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        })
    ]
}