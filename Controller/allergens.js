const allergensModel = require('../Model/Allergens');

module.exports.addAllergen = async function (req, res, next) {
    try {
        const { description, isCommon } = req.body;
    
        const data = new allergensModel({description:description, isCommon:isCommon});
        const insertAllergen = await data.save();
                                    
        await res.send(insertAllergen);
     
       
    }
    catch (e) {
        next(e);
    }
}
module.exports.getAllergens = async function (req, res, next) {
    try {
       const getAllergens = await allergensModel.find({ isCommon: true });
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
       const getMoerergens = await allergensModel.find({ isCommon: false });
        if (getMoerergens){
            res.send(getMoerergens);
       
    }else{
        res.status(204).json({Allergens:"not found"});
    }
}
    catch (e) {
        next(e);
    }
}

