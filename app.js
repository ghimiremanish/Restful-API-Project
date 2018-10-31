const express = require('express');
const app = express();
const morgan = require('morgan');// log manager
const bodyParser = require('body-parser'); // package which help to parse incoming data
const mongoose = require('mongoose'); //connecting mongoose

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongoose.connect('mongodb://api-test:'+ process.env.MONGO_ATLAS_PW + '@api-test-shard-00-00-v8oll.mongodb.net:27017,api-test-shard-00-01-v8oll.mongodb.net:27017,api-test-shard-00-02-v8oll.mongodb.net:27017/test?ssl=true&replicaSet=api-test-shard-0&authSource=admin&retryWrites=true',
    {
        useMongoClient : true
    }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //this will extract data & show in easily readable format

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

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