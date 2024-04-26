var mysql = require("mysql");
var express = require('express');
var app = express();

app.use(express.static('public'))

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});

app.get('/data', function (req, res) {
  var sql = "SELECT * FROM members WHERE id = 1";
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
    console.log(results);
  });
});
