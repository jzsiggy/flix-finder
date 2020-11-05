require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use(cors({
    origin : ['http://localhost:3000'],
    credentials : true,
  }));

const { movieRouter } = require('./routes');
app.use('/movies/', movieRouter);

app.listen(5000, () => {
    console.log(
        'FLIXFIND listening on port 5000',
    );
});