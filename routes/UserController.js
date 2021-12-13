var express = require('express');
var router = express.Router();
var Product = require('./../db/models/product');
var User = require('./../db/models/user');

// Loading GameInformation
router.get('/GameInformation', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('GameInformation/home', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

// Loading GameStatistics
router.get('/PlayStatistics', (req, res) => {
    res.render('PlayerStatistics/home');
});

// Loading GamePrice
router.get('/GamePrice', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('GamePrice/home', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
})

// Go to update product GameInformation
router.get('/GameInformation/update-product/:productId', (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('GameInformation/update-product', { product: product });
    })
});

// Update product with GameInformation
router.post('/GameInformation/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.productName, type: req.body.productType, details: req.body.productDetails } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/GameInformation')
        })
});


module.exports = router;