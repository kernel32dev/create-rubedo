const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = /** @satisfies { import("webpack").Configuration} */ ({
    entry: './src/index.tsx',
    mode: process.env["NODE_ENV"] == 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.(?:js|jsx|mjs|cjs|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env']
                        ],
                        plugins: [
                            [
                                "@babel/plugin-transform-react-jsx",
                                {
                                    throwIfNamespace: true,
                                    runtime: "automatic",
                                    importSource: "rubedo-dom",
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".cjs"],
    },
    output: {
        filename: 'index.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html"
    })],
    experiments: {
        css: true
    },
});
