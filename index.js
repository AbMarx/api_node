const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
var consign = require('consign');
const apicache = require("apicache");

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//FAZ O CACHEAMENTO DA API (MELHORAS NA PERFORMANCE)
let cache = apicache.middleware
app.use(cache('5 minutes'))


//FAZ O AUTOLOAD DE TODOS OS ARQUIVOS DA CONTROLLER
consign()
  .then('controller')
  .into(app);

app.post("/user", app.controller.userController.checkToken, app.controller.userController.all);
app.post("/user/:id", app.controller.userController.get_by_id);

app.listen(9000, () => console.log('Express started at http://localhost:9000'));