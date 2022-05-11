const mongoose = require('mongoose');
const schema = mongoose.Schema;



const NutritionalFactSchema = new schema({
    description : {
        type: String,
    }

},
    { timestamps: true, 'toJSON': { virtuals: true } });




module.exports = mongoose.model('NutritionalFact', NutritionalFactSchema);