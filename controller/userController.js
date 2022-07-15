const userRepository = require("../repository/userRepository");
const userModel = require("../model/userModel");
module.exports ={
    all: function(req, res){
      var userRepositoryClass = new userRepository();
      userRepositoryClass.all().then(function(results){
        res.send(results)
      })
      .catch(function(err){
        console.log("Promise rejection error: "+err);
      })
    },
    get_by_id: function(req, res){
      const userid = req.params.id
      var userModelClass = new userModel(userid)
      var userRepositoryClass = new userRepository();
      userRepositoryClass.get_by_id(userModelClass.id).then(function(results){
        res.send(results)
      })
      .catch(function(err){
        console.log("Promise rejection error: "+err);
      })
    },

    checkToken: function(req, res, next) {
      var authorised = false;
      
      if(req.body.token == 123){
          authorised = true
      }

      if (authorised) {
          next();
      }
      else {
          return res.status(403).send({status_code:123, data:"Invalid Token"});
      }
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