  
var express = require('express');
var path = require('path');
var htmlRoutes = require('./routes/htmlRoutes');
var apiRoutes = require('./routes/apiRoutes');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});