const allergensModel = require('../Model/Allergens');


module.exports.getAllergens = async function (req, res, next) {
    try {
       const getAllergens = await allergensModel.find();
        if (getAllergens){
            res.send(getAllergens);
       
    }else{
        res.status(204).json({Allergens:"not found"});
    }
}
    catch (e) {
        next(e);
    }
}
module.exports.getMoreAllergens = async function (req, res, next) {
    try {
       const getAllergens = await allergensModel.find();
        if (getAllergens){
            res.send(getAllergens);
       
    }else{
        res.status(204).json({Allergens:"not found"});
    }
}
    catch (e) {
        next(e);
    }
}

