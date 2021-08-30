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
    extensions: ['.js', '.tsx'],
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    ...options.plugins,
  ],
  stats: options.stats, // 打包日志发生错误和新的编译时输出
});
