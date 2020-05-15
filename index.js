var express = require('express');
var mysql = require('mysql');
const hbs = require('hbs');

var con = mysql.createConnection({
    host: "192.168.1.106",
    user: "user",
    password: "123456",
    database: "USER",
    port: 3306
});
var app = express();
app.set('view engine', 'hbs');

con.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Connected!!!")
});

app.listen(3000, function() {
    console.log('Node server running @ http://localhost:3000')
});

app.get('/users', (req, res) => {
    let sql = "SELECT * FROM detail";
    let query = con.query(sql, (err, users) => {
        if (err) throw err;
        res.render('../users/index', {
            users: users
        });
    });
});