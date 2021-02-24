const path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals')
//var nodeExternals = require('web')
const { VueLoaderPlugin } = require("vue-loader");

const clientConfig = {
	target: 'web',
	entry: './src/index.js',
	node: {
		fs: 'empty',
		net: 'empty'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'client.bundle.js'
	},
	externals: [
		{
			sysfiles: '.bin',
			'ganache-core': 'ganache-core' 
			//'net': 'net'
		}
	],
	resolve: {
    	modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'build'), path.resolve(__dirname, 'stdlib'), 'node_modules'],
    	//extensions: ['*', '.js'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
        //'ethers$': path.resolve(__dirname, 'node_modules/@reach-sh/stdlib/node_modules/ethers/dist/ethers.min.js')
      }
  	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: "vue-loader"
			},
			{
		        test: /\.css$/,
		        use: [
		          'vue-style-loader',
		          'style-loader',
		          'css-loader'
		        ]
			}		
		]
	},
  plugins: [new htmlWebpackPlugin(),
  	new webpack.DefinePlugin({
      'process.env': {
        'REACH_CONNECTOR_MODE': "'ETH-test-browser-window'"
      }
    }),
    new VueLoaderPlugin()
  ]
  //watch: true
};

module.exports = clientConfig;