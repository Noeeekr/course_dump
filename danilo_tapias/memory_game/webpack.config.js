// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const copyWebpackPlugin = require("copy-webpack-plugin");

const stylesHandler = 'style-loader';



const config = {
    entry: './src/typescript/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist','js')
    },
    target: ["web","es5"],
    plugins: [
        new copyWebpackPlugin(
            {
                patterns: [
                    {
                        from: "src/stylesheets",
                        to: "../stylesheets"
                    },
                    {
                        from: "index.html",
                        to: "../pages"
                    },
                ],
            }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/i,
                loader: 'babel-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
