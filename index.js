var express = require('express');
var app = express();
const port = 3000;

var api_routes = require('./backendRoutes.js');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api', api_routes);

app.use('/demo', express.static('frontendFiles'));

app.listen(process.env.PORT || port,function(){
    console.log("The server is running on port 3000");
})

