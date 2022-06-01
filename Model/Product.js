const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const schema = mongoose.Schema;

const nfSchema = new schema({
  nf_description: { type: String },
  amount_desc: { type: String },
  amount: {
    type: Number

  },
})

const productSchema = new schema({

  brand: {
    type: String
  }
  , name: {
    type: String

  },
  description: {
    type: String
  },
  barcode: {
    type: String
  },

  amount:{
    type:Number
  } ,
  measurment: {
    type:String
  },
  nf: {
     type: [nfSchema]
     },


  allergens: {
    allergen_contains: [String],
    allergen_may_contain: [String]
  },
  moreInfo: String
},
  { timestamps: true, 'toJSON': { virtuals: true } });

module.exports = mongoose.model('Product', productSchema);