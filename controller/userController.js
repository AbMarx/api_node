const user = require("../model/user");
module.exports ={
    all: function(req, res){
      var userModel = new user();
      userModel.all().then(function(results){
        res.send(results)
      })
      .catch(function(err){
        console.log("Promise rejection error: "+err);
      })
    },
    get_by_id: function(req, res){
      const userid = req.params.id
      var userModel = new user();
      userModel.get_by_id(userid).then(function(results){
        res.send(results)
      })
      .catch(function(err){
        console.log("Promise rejection error: "+err);
      })
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