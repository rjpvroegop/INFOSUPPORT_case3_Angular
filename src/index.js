// server.js
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get("^[^.]+$", function (req, res) {
  res.sendfile('./index.html');
});
app.listen(9999);
console.log("Kantilever frontend listening on port 9999");
