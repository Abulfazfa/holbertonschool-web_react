const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8564,
        hot: true,
        static: {
           directory: path.resolve(__dirname, '../dist')
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /nodes_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
}
