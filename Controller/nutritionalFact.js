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

module.exports.addNutritionalFact=async function(req,res,next){
    try{
        
        const NutritionalFactiption= NutritionalFactModel({description:req.body.description});
      const inserted=  await NutritionalFactiption.save();
      res.send(inserted)
    
       
    }
    catch(err){
        next(err);
    }
}