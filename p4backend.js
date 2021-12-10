var express = require('express');
var app = express();

var api_routes = require('./backendRoutes.js');

app.use('/api', api_routes);

app.use('/demo', express.static('frontendFiles'));

app.listen(3000,function(){
    console.log("The server is running on port 3000");
})

