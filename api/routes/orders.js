const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Order was fetched'
    });
});

router.post('/',(req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});

router.get('/:orderID',(req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderID
    });
});

router.delete('/:orderID',(req, res, next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderID
    });
});

module.exports = router;