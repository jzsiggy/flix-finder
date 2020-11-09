require('dotenv').config()
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: false,
    credentials: 'same-origin',
    cookie: { secure: false , maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use(cors({
    origin : ['http://localhost:3000'],
    credentials : true,
}));

app.use((req, res, next) => {
    console.log(req.session);
    next()
})

const { movieRouter , authRouter} = require('./routes');
app.use('/movies/', movieRouter);
app.use('/auth/', authRouter);

app.listen(5000, () => {
    console.log(
        'FLIXFIND listening on port 5000',
    );
});