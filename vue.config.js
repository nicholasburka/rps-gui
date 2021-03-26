module.exports = {
	publicPath: '/',
	devServer: {
		allowedHosts: [
		      'localhost',
		    ],
		proxy: {
			'^/algod': {
				target: 'http://localhost:4180',
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