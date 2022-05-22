const productsModel = require('../Model/Product');


module.exports.getAllProducts = async function (req, res, next) {
    try {
        const getAllProducts = await productsModel.find();
        if (getAllProducts) {
            res.send(getAllProducts);

        } else {
            res.status(204).json({ Products: "not found" });
        }
    }
    catch (e) {
        next(e);
    }
}

module.exports.getProductbybarcode = async function (req, res, next) {
    try {
   
        const barcode = req.params.barcode
        console.log(barcode)
        const getProduct = await productsModel.findOne({ barcode: barcode });
        if (getProduct) {
            debugger
            console.log(getProduct)
            res.send(getProduct);

        } else {
            res.status(204).json({ Product: "not found" });
        }
    }
    catch (e) {
        next(e);
    }
}
module.exports.addProduct = async function (req, res) {

    var product = req.body;
    const { brand, name, description, barcode, amount, measurment, nf, allergens, moreInfo } = product;

    const data = new productsModel({
        brand: brand, name: name, description: description, barcode: barcode, amount: amount
        , measurment: measurment, nf: nf, allergens: allergens, moreInfo: moreInfo
    });
    const insertproduct = await data.save();
    res.send(insertproduct);
}

module.exports.updateProductDetails = async function (req, res) {
    var product = req.body;
  
    const { brand, name, description, barcode, amount, measurment, nf, allergens, moreInfo } = product;


    const data = new productsModel({
        brand: brand, name: name, description: description, amount: amount
        , measurment: measurment, nf: nf, allergens: allergens, moreInfo: moreInfo
    });


    const updated = await productModel.findOneAndUpdate({ barcode: barcode }, {
            $set: {
                data
            }
        });
     
    res.send(updated);
}



