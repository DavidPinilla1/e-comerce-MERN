const Product = require('../models/Product');

const ProductController = {
    getAll(req, res) {
        Product.find()
            .populate('userId') //include equivalent
            .populate('orderIds')
            .then(products => res.send(products))
            .catch(console.error)
    }
}
module.exports = ProductController