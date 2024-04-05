const path = require("path");

module.exports = {
    mode: "production",
    entry: [
        './src/ts/index.ts'
    ],
    output: {

        filename: "[name].js",
        path: path.resolve(__dirname,'dist','js')
    },
    resolve: {
        extensions: [ '.ts', '.js', '.tsx' ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

        ]
    }
}