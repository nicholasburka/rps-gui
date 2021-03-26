module.exports = {
	publicPath: '/rps-gui/', //https://cli.vuejs.org/guide/deployment.html
	devServer: {
		allowedHosts: [
		      'localhost',
		    ],
		proxy: {
			'^/algod': {
				target: 'http://localhost:4180',
				//target: ''
				//changeOrigin: true,
				pathRewrite: {'^/algod': ''},
				logLevel: 'debug'
			},
			'^/indexer': {
				target: 'http://localhost:8980',
				//changeOrigin: true,
				pathRewrite: {'^/indexer': ''},
				logLevel: 'debug'
			}
		}
	}
}