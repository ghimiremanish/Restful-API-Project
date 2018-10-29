const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling Get Request to /products'
    });
});


router.post('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling POST Request to /products'
    });
});

router.delete('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling Delete Request to /products'
    });
});


router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'status') {
        res.status(200).json({
            message: 'hello manish',
            id: id
        });
    } else{
        res.status(200).json({
            id: id
        });
    }
});
module.exports = router;