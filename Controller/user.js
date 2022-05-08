const userModel = require('../Model/user');
//const { ObjectId } = require('mongodb');
// const logger = require('../log/logger');

module.exports.signUp = async function (req, res, next) {
    try {
        const { firstname, lastname, language, email,password } = req.body;
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
        const getUser = await userModel.findOne({ email: userName, password: password });
        if (getUser)
            res.send(getUser);
        else
            res.status(204).send(getUser)
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