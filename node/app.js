var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var routes = require("./routes/v1_routes.js");
var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({extended : false});

app.use(urlencode);
app.use(routes);

// app.post('/*', function(res, req) {
//   console.log('body: ', req.body)
//   console.log('query: ', req.query)
// });
app.listen(9001, function () {
  console.log('Example app listening on port 9001!');
});