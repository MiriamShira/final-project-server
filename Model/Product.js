const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const schema = mongoose.Schema;

const nfSchema=new schema({
    amount_desc:{String},
        amount:{
            Number

        },
})

const productSchema = new schema({
 
  brand:{
    type:String
  }
  ,name:{
    type:String

  },
  description:{
    type:String
  },
  barcode:{
    type:String
},
amount:Number,
measurment:String,
  nf:[
    {nf_calories:{
        type:nfSchema,

        }},
    {nf_fats:{
        type:nfSchema,

        }},{nf_sodium:nfSchema},{nf_cholesterol:nfSchema},{nf_total_carbohydrate:nfSchema}
  ],
  allergens:{
    allergen_contains:[String],
    allergen_may_contain:[String]
  },
moreInfo:String
},
    { timestamps: true, 'toJSON': { virtuals: true } });




module.exports = mongoose.model('Product', productSchema);