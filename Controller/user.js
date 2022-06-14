const userModel = require('../Model/User');
//const { ObjectId } = require('mongodb');
// const logger = require('../log/logger');
const bcrypt = require('bcrypt');
const productController = require('../Controller/product')
const productService = require('./services/product')
module.exports.signUp = async function (req, res, next) {
    try {
        const { firstname, lastname, language, email, password, alerts } = req.body;
        console.log(alerts);
        //    bcrypt.hashSync(password,10,(error,hash)=>{
        //        if(error){
        //            //res.status(500).json({error})
        //            next(error){
        const data = new userModel({ firstname: firstname, lastname: lastname, language: language, email: email, password: password, alerts: alerts });
        const insertUser = await data.save()


        await res.send(insertUser);


    }
    catch (e) {
        next(e);
    }
}
module.exports.login = async function (req, res, next) {
    try {
        const userName = req.params.userName;
        const password = req.params.password;
        const getUser = await userModel.findOne({ email: userName });
        if (getUser && getUser.password === password) {
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
        const { firstname, lastname, language, password, alerts } = user;
        const userUpdated = await userModel.findOneAndUpdate({ email: req.params.userName }, {
            $set: {
                firstname: firstname,
                lastname: lastname,
                language: language,
                password: password,
                alerts: alerts
            }
        });
        console.log(userUpdated);
        await res.send(userUpdated);

    }
    catch (err) {
        next(err)
    }

}

module.exports.getAlertsForRegisteredUser = async function (req, res, next) {
    try {
        console.log("first")

        const userName = req.params.userName;
        const getUser = await userModel.findOne({ email: userName });
        if (getUser) {
            const alerts = getUser.alerts;
            console.log(alerts)
            const productInfo = await productController.getProductbybarcode(req, res, next);
            if (productInfo) {

                console.log(productInfo);

                const Result = productService.check(alerts, productInfo);
                await res.send({ alert: Result, productInfo: productInfo });
            }
            else {
                res.status(204).send({ product: 'not found' });
            }


        }

    }
    catch (e) {
        next(e);
    }
}

module.exports.getAlertsForGuest = async function (req, res, next) {
    try {
        const alerts = "(get from data for guest....)";
        const productInfo = await productController.getProductbybarcode(req, res, next);
        const Result = await productService.check(alerts, productInfo);

        res.send(Result);
    }
    catch (e) {
        next(e);
    }
}
