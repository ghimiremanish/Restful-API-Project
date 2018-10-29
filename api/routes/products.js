const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling Get Request to /products'
    });
});


router.post('/', (req,res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message:'Handling POST Request to /products',
        createdProduct:  product
    });
});

router.delete('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling Delete Request to /products'
    });
});

// get router with ID
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

// patch request -> data update route with ID
router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Product Updated'
    }); 
});

// delete route with ID
router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Product Deleted'
    }); 
});





module.exports = router;