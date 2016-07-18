var webpack = require('webpack');
var webPackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

new webPackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: false
}).listen(3000, 'localhost', function(err, result) {
    if(err) {
        console.log(err);
    }
    console.log('Listening on http://localhost:3000/', result);
});
