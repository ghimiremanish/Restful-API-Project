const express = require('express');
const app = express();
const morgan = require('morgan');// log manager
const bodyParser = require('body-parser'); // package which help to parse incoming data

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //this will extract data & show in easily readable format

// Routes which handels request
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//error handling whild typying unknown URL
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;