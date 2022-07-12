// import express from 'express'
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const { engine } = require('express-handlebars');

const app = express();
// import route from '/index.js'
const route = require('./routes');

//conect DB
var db = require('./config/db/index');

db.Connect();

app.use(morgan('combined'));

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

// Change Method
app.use(methodOverride('_method'));

//handlebars
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', '.\\src\\resources\\views');

//route init
route(app);

// define port
const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
