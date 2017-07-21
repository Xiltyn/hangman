const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'build');

// We point to our static assets
app.use(express.static(publicPath));


// We only want to run the workflow when not in production
if (!isProduction) {

    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    const bundle = require('./bundle.js');
    bundle();

    // Any requests to localhost:3000/dev is proxied
    // to webpack-dev-server
    app.all('/dev/*', function (req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });

}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
});

// And run the server
app.listen(port, function () {
    let prodMessage = ':: Production version running on ::';
    let devMessage  = ':: Development version running on ::';
    let prodPort    = "    localhost:" + port;
    let devPort     = "    localhost:" + port + "/dev/";

    let cyan    = '\x1b[36m%s\x1b[0m';
    let green   = '\x1b[32m%s\x1b[0m';
    let blue    = '\x1b[34m%s\x1b[0m';
    let white   = '\x1b[37m%s\x1b[0m';

    console.log(cyan, prodMessage);
    console.log(blue, prodPort);
    console.log('');
    console.log(white, '☩ ☩ 風流:デベロップメント ☩ ☩');
    console.log('');
    console.log(green, devMessage);
    console.log(blue, devPort);
    console.log('');
});

