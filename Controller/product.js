const productsModel = require('../Model/Product');
const productBL=

module.exports.getAllProducts = async function (req, res, next) {
    try {
       const getAllProducts = await productsModel.find();
        if (getAllProducts){
            res.send(getAllProducts);
       
    }else{
        res.status(204).json({Products:"not found"});
    }
}
    catch (e) {
        next(e);
    }
}
module.exports.addProduct = async function (req, res) {

    var product = req.body;
    const { brand,name,description,barcode,amount,measurment,nf,allergens,moreInfo} = product;

    const data = new productModel({brand:brand,name:name,description:description,barcode:barcode,amount:amount
        ,measurment:measurment,nf:nf,allergens:allergens,moreInfo:moreInfo});
    const insertproduct = await data.save();
  

}
module.exports.updateProductDetails = async function (req, res) {
    var product = req.body;
    const { brand,name,description,barcode,amount,measurment,nf,allergens,moreInfo} = product;
    
    const data = new productModel({brand:brand,name:name,description:description,amount:amount
        ,measurment:measurment,nf:nf,allergens:allergens,moreInfo:moreInfo});


   const updated= await productModel.findOneAndUpdate
    ({ barcode: barcode }, {
        $set: {
            data
        }
    });    
     res.send(updated);
}



