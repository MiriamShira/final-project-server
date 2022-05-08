const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.CONNECTIONSTRING;

class Mongoose {
    constructor() {  }
    connectFunction() {
         mongoose.connect(`mongodb://${url}`)
            .then(() => console.log('database connection success'));
    }
}
module.exports=new Mongoose();