const db_connection = require("../classes/connect_db");

module.exports ={
    all: function(req, res){   +
      DB.connect(function(err) {
        var sql = "SELECT * FROM user";
        DB.query(sql, function (err, result) {
            if (err) throw err;
            var users = result;
            res.send(users);
        });
      });
    },
    viewOne: function(req, res){
      console.log('Viewing '+req.params.id);
    },
    create: function(req, res){
      console.log('Todo created');
    },
    destroy: function(req, res){
      console.log('Todo deleted');
    },
    edit: function(req, res){
      console.log('Todo '+req.params.id+' updated');
    }
};