const mongoose = require('mongoose');
const schema = mongoose.Schema;



const allergensSchema = new schema({
    milk : {
        type: Boolean,
    },
    nuts : {
        type: Boolean,

    
    },
},
    { timestamps: true, 'toJSON': { virtuals: true } });




module.exports = mongoose.model('Allergens', allergensSchema);