const mongoose = require('mongoose');
const schema = mongoose.Schema;
const { isEmail } = require('validator');


const usersSchema = new schema({
    firstname: {
        type: String,
        minlength: 2,
        required: false

    
    },
    lastname: {
        type: String,
        minlength: 2,
        required: false
    },
    language: {
        type: String,
        minlength: 2,
        required: false
    },
    email: {
        type: String,
        required: false,
        validate: [isEmail, "Please write email again"],
        unique: true

    },

    password: {
        type: String,
        minlength: 2,
        required: false
    }

},
    { timestamps: true, 'toJSON': { virtuals: true } });




module.exports = mongoose.model('Users', usersSchema);