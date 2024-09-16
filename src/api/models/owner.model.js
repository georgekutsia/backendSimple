const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const ownerSchema =  new Schema(
  {
    images: {type:String},
    flats : [{type:Schema.Types.ObjectId, ref : "flat"}],
  },
   { collection: "owner"},
   {timestamps:true}
)


const Owner = mongoose. model( 'owner', ownerSchema);

module.exports = Owner