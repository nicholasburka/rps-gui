const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals')
//var nodeExternals = require('web')

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
	module: {
	  rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
	  ]
	},
  plugins: [new htmlWebpackPlugin()],
  //watch: true
};

module.exports = clientConfig;