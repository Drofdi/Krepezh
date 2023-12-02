const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development', 
    entry: {
      index: './src/main.js',
      catalogMain: './src/catalogMain.js',
      about: './src/about.js',
      contacts: './src/contacts.js',
      promotions: './src/promotions.js',
      catalogItems: './src/catalogItems.js',
    },
    output: {
       filename: 'bundle.[contenthash].js',
       path: path.resolve(__dirname, 'dist'),
       assetModuleFilename: 'images/[hash][ext][query]',
       clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'catalogMain.html'),
        filename: 'catalogMain.html',
        chunks: ['catalogMain'],
      }),      
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'about.html'),
        filename: 'about.html',
        chunks: ['about'],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'contacts.html'),
        filename: 'contacts.html',
        chunks: ['contacts'],
      }),      
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'promotions.html'),
        filename: 'promotions.html',
        chunks: ['promotions'],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'catalogItems.html'),
        filename: 'catalogItems.html',
        chunks: ['catalogItems'],
      }),  
        new MiniCssExtractPlugin({
            filename: '[name].css',
/*             filename: '[name].[contenthash].css', */ //dont work, error MIMO
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
          {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource'
          },
        ],
      },
};