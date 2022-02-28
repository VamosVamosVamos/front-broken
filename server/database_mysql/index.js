var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tonykross123/",
  database: "vamos",
});

module.exports = connection;
