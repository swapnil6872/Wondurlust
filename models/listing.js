const  mongoose = require("mongoose");
const Schema =mongoose.Schema;
const Review=require('./review')

const listingSchema = new Schema ({
    title:{
        type:String,
        requied:true
    },
    description:String,
    image:{
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCgO_PBp8530SDSejcLGOLq6sxwA5ymlh0g&s",
        type:String,
        set:(v) => v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCgO_PBp8530SDSejcLGOLq6sxwA5ymlh0g&s" :v,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

listingSchema.post('findOneAndDelete' ,async (listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
    
})

const Listing = mongoose.model('Listing',listingSchema);

module.exports=Listing;