var express = require('express');
var router = express.Router();
var Product = require('./../db/models/product');
var Csvc = require('../db/models/csvc');
const csvc = require('../db/models/csvc');

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

// Go to Update product with GamePrice
router.get('/GamePrice/update-product/:productId', (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('GamePrice/update-product', { product: product });
    })
});

// Update product with GamePrice
router.post('/GamePrice/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.productName, type: req.body.productType, details: req.body.productDetails } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/GamePrice')
        })
});

// Delete product
router.delete('/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc);
    })
});

// Go to add product
router.get('/add-product', (req, res) => {
    res.render('GamePrice/add-product');
});

// Add new product
router.post('/', (req, res) => {
    let newProduct = new Product({
        name: req.body.productName,
        type: req.body.productType,
        details: req.body.productDetails,
    });

    newProduct.save()
        .then(doc => {
            res.redirect('/GamePrice')
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

// Load csvc
router.get('/csvc', (req, res) => {
    Csvc.find({})
        .then(products => {
            res.render('CSVC/home', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

// Go to Update product with GamePrice
router.get('/csvc/update-product/:productId', (req, res) => {
    Csvc.findById(req.params.productId, (err, product) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('csvc/update-product', { product: product });
    })
});

router.post('/csvc/:productId', (req, res) => {
    let productId = req.params.productId;
    Csvc.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.productName, type: req.body.productType, details: req.body.productDetails } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/csvc')
        })
});



// Go to add product
router.get('/csvc/add-product', (req, res) => {
    res.render('csvc/add-product');
});

router.post('/csvc', (req, res) => {
    let newProduct = new Csvc({
        name: req.body.productName,
        type: req.body.productType,
        details: req.body.productDetails,
    });

    newProduct.save()
        .then(doc => {
            res.redirect('/csvc')
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

router.delete('/csvc/:productId', (req, res) => {
    let productId = req.params.productId;
    Csvc.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc);
    })
});

// Go to thong ke
router.get('/thongke', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('ThongKe/home', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});


module.exports = router;