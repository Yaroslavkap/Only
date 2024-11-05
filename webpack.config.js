const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',  // Вставляет CSS в DOM
                    'css-loader'     // Обрабатывает CSS
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // Шрифты
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]', // Настройка именования файлов
                            outputPath: 'fonts/', // Путь для вывода шрифтов
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Путь к вашему HTML-шаблону
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
    },
    mode: 'development',
};
