const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/ExpressError');
const Review = require('../models/review');
const { reviewSchema } = require('../schema');
const Listing = require('../models/listing')
const {validateReview} =require('../middleware')


//post Route
router.post('/', validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id).populate('reviews');
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash('success', "New review Created!")
    res.redirect(`/listings/${req.params.id}`)
}));

//Delete Review Route 
router.delete('/:reviewId', wrapAsync(async (req, res,) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId);
    req.flash('success',"Review Deleted !")
    res.redirect(`/listings/${id}`)
}))

module.exports = router;