const productController = require('../Controller/product');
const express = require('Express');
const router = express.Router();

router.get('', productController.getAllProducts);
router.get('/:barcode/:userName/:password', productController.getProductbybarcode);

router.post('/', productController.addProduct);

router.put('/:userName', productController.updateProductDetails);

module.exports = router;