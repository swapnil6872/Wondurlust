const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/ExpressError');
const Review = require('../models/review');
const { reviewSchema } = require('../schema');
const Listing = require('../models/listing')
const {validateReview, isLoggedIn,isReviewAuthor} =require('../middleware')
const reviewController = require('../controllers/reviews');


//post Route
router.post('/', isLoggedIn ,validateReview, wrapAsync(reviewController.createReview));

//Delete Review Route 
router.delete('/:reviewId',isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports = router;