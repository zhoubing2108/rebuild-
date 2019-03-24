const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成模板html文件的插件
const webpack = require('webpack');

const publicPath = '/';

module.exports = {
	entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
	output: {
		path: path.resolve(__dirname, 'build'), //打包文件的输出路径
		filename: 'bundle.js', //打包文件名
		chunkFilename: '[name].[id].js',
		publicPath: publicPath,
	},
	devtool: 'cheap-module-eval-source-map',
	//配置webpack-dev-server热更新，采用非Node方式
	devServer: {
		publicPath: publicPath,
		contentBase: path.resolve(__dirname, 'build'),
		inline: true,
		hot: true,
		historyApiFallback: true,
		port: '8091',
		proxy: {
			'/api': {
				target: 'http://112.33.28.5:8888',
				changeOrigin: true
			}
		}
	},
	module: {
		loaders: [{
				test: /\.bundle\.js$/,
				exclude: /src/,
				use: {
					loader: 'bundle-loader',
					options: {
						lazy: true,
						name: '[name]'
					}
				}
			}, {
				test: /\.js$/,
				// use: ‘babel-loader’,
				use: {
					loader: 'babel-loader',
					options: {
						// presets: [‘env’, ‘stage-0’, ‘react’],
						// plugins: [‘transform-runtime’, ‘react-hot-loader/babel’]
						presets: ['env', 'stage-0', 'react', 'es2015', 'stage-1'],
						plugins: [
							["import", {
								libraryName: "antd",
								style: "css"
							}], 'transform-decorators-legacy', 'react-hot-loader/babel'

						]
					}
				}
			},


			//  {
			// 	test: /\.js$/,
			// 	loader: 'babel-loader',
			// 	query: {
			// 		presets: ['env', 'react', 'stage-2'], //babel编译es6以上语法以及jsx语法
			// 	}
			// },

			{
				test: /\.css$/,
				exclude: /node_modules|antd\.css/,
				use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true
					}
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: () => [
							require('autoprefixer'), //自动添加浏览器前缀
							require('precss'), //如果要使用less就不用这个插件了，precss语法类似于sass
							require('postcss-flexbugs-fixes') //解决flex布局的一些bug
						]
					}

				}, ]
			}, {
				test: /\.css$/,
				include: /node_modules|antd\.css/,
				use: [
					require.resolve('style-loader'), {
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					}, {
						loader: require.resolve('postcss-loader'),
						options: {
							ident: 'postcss',
							plugins: () => [
								require('autoprefixer'), //自动添加浏览器前缀
								require('precss'), //如果要使用less就不用这个插件了，precss语法类似于sass
								require('postcss-flexbugs-fixes') //解决flex布局的一些bug
							]
						},
					},
				],
			}, {
				test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'url-loader',
				options: {
					limit: 10000, //该大小以下图片会转成base64
				},
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
	],

}