const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';
    const cssExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
        mode: 'development',
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: cssExtract.extract({
                    use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                        
                    ]
                }),
                test: /\.s?css$/,
    
            }]
        },
        plugins: [cssExtract],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };
};


