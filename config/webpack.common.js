/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-10 09:10:50
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-16 16:40:35
 * @FilePath: \webpack-react\config\webpack.common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = (options) => ({
  mode: options.mode,
  entry: paths.appSrc,
  output: {
    path: paths.appBuild,
    publicPath: '/',
  },
  cache: {
    // 使用持久化缓存
    type: 'filesystem', // memory:使用内容缓存 filesystem：使用文件缓存
  },
  devtool: false,
  resolve: {
    // 省略引入文件后缀名
    extensions: ['.js', '.tsx', '.ts'],
    // 配置文件别名
    alias: {
      '@': paths.appSrc,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
    ],
  },
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true, //  该选项的作用所有的404都连接到index.html
    proxy: {
      '/api': {
        target: 'http://localhost:3001/api',
        changeOrigin: true, // 是否允许跨域
        pathRewrite: {'^/api': ''} // 
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    ...options.plugins,
  ],
  stats: options.stats, // 打包日志发生错误和新的编译时输出
});
