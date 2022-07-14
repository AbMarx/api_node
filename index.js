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

app.post("/user", userController.all);
app.post("/user/:id", userController.get_by_id);

app.listen(9000, () => console.log('Express started at http://localhost:9000'));