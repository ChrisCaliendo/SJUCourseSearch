var express = require('express');
var app = express();
const port = 3000;

var api_routes = require('./backendRoutes.js');

app.use('/api', api_routes);

app.use('/demo', express.static('frontendFiles'));

app.listen(process.env.PORT || port,function(){
    console.log("The server is running on port 3000");
})

