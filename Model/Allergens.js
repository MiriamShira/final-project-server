const mongoose = require('mongoose');
const schema = mongoose.Schema;



const allergensSchema = new schema({
    description : {
        type: String,
    },
    isCommon : {
        type: Boolean,

    
    },
},
    { timestamps: true, 'toJSON': { virtuals: true } });




module.exports = mongoose.model('Allergens', allergensSchema);