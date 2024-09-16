const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const flatSchema =  new Schema(
  {
    images: [{type:String}],
    number:{type:String, required : true},
    description : {type:String},
  },
   { collection: "flat"},
   {timestamps:true}
)


const Flat = mongoose.model( 'flat', flatSchema);

module.exports = Flat