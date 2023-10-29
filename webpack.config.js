// jshint ignore: starts
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );

// Set different CSS extraction for editor only and common block styles
const blockCSSPlugin = new MiniCssExtractPlugin({
    filename: './css/style.css',
});

module.exports = {
    externals: {
        'lodash': 'lodash'
    },
    entry: {
        'js/block.build': './src/js/block.js',
        'js/faq-block-for-gutenberg': './src/js/faq-block-for-gutenberg.js',
        'css/style': './src/css/style.scss',
    },
    output: {
        path: path.resolve(__dirname, './assets')
    },
    watch: 'production' === process.env.NODE_ENV ? false : true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s?css$/,
                use: [ MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    }
                    ],
            },
        ],
    },
    plugins: [
        blockCSSPlugin,
        new FixStyleOnlyEntriesPlugin()
    ]
};
