const db_connection = require("./connect_db");

class User{
    all = function(){
        return new Promise(function(resolve, reject){
            DB.query(
                "SELECT * FROM user", 
                function(err, rows){ 
                    if (err) resolve({status_code:400, data: err});
                    resolve({status_code:200, data: rows});
                }
        )}
    )}

    get_by_id = function(userid){
        return new Promise(function(resolve, reject){
            DB.query(
                "SELECT * FROM user WHERE id = "+ DB.escape(userid), 
                function(err, rows){       
                    if (err) resolve({status_code:400, data: err});
                    resolve({status_code:200, data: rows});
                }
            )}
    )}
}

module.exports =  User
