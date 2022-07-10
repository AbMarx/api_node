var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'database-api-node.cx8i7shistge.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : '3080Rodo',
    database: "api_node"
});

global.DB = connection