const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
   
function checkToken(req, res, next) {
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
}

app.post("/user", checkToken, userController.all);
app.post("/user/:id", userController.get_by_id);

app.listen(9000, () => console.log('Express started at http://localhost:9000'));