const userModel = require('../Model/user');
//const { ObjectId } = require('mongodb');
// const logger = require('../log/logger');
const bcrypt=require('bcrypt');
module.exports.signUp = async function (req, res, next) {
    try {
        const { firstname, lastname, language, email,password } = req.body;
    //    bcrypt.hashSync(password,10,(error,hash)=>{
    //        if(error){
    //            //res.status(500).json({error})
    //            next(error)
    //        }  })
            const data = new userModel({firstname:firstname, lastname:lastname, language:language, email:email,password:password});
        const insertUser = await data.save();
        await res.send(insertUser);
     
       
    }
    catch (e) {
        next(e);
    }
}
module.exports.login= async function (req, res, next) {
    try {
        const userName = req.params.userName;
        const password = req.params.password;
        const getUser = await userModel.findOne({ email: userName});
        if (getUser&&getUser.password===password){
            res.send(getUser);
            // bcrypt.compare(password,getUser.password,(error,result)=>{
            //    if(error) {
            //     next(error);   
            //    }
            //    res.send(getUser);
            //    result
            // })
            // res.status(401).send('something went worng.....')
        }
            
        else
            res.status(204).send('something whent worng.....')
    }
    catch (e) {
        next(e);
    }
}

module.exports.updateDetails = async function (req, res, next) {
    try {
      

            var user = req.body;
            const {firstname, lastname, language,password} = user;
            const userUpdated = await userModel.findOneAndUpdate({ email: req.params.userName }, {
                $set: {
                    firstname: firstname,
                    lastname:lastname,                    
                    language:language,
                    password: password
                }
            });

             res.send(userUpdated);
      
    }
    catch (err) {
        next(err)
    }

}