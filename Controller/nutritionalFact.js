const NutritionalFactModel =require('../Model/NutritionalFact');
const mongoose=require('mongoose');
module.exports.getNutritionalFact=async function (req,res,next){
    try{
        const NutritionalFact=await NutritionalFactModel.find();
        res.send(NutritionalFact)
       
    }
catch(err){
    next(err);
}
}