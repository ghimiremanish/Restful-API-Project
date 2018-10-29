const express = require('express');
const app = express();
const morgan = require('morgan');// log manager

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

// Routes which handels request
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


module.exports = app;