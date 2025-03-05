const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require('./review');
const { required } = require("joi");

const listingSchema = new Schema({
    title: {
        type: String,
        requied: true
    },
    description: String,
    image: {

        url: String,
        filename: String
        // default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCgO_PBp8530SDSejcLGOLq6sxwA5ymlh0g&s",
        // type:String,
        // set:(v) => v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCgO_PBp8530SDSejcLGOLq6sxwA5ymlh0g&s" :v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          } 
    }
})

listingSchema.post('findOneAndDelete', async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }

})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;