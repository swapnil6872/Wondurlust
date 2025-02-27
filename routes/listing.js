const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync')
const { listingSchema } = require('../schema');
const ExpressError = require('../utils/ExpressError');
const Listing = require('../models/listing');
const { isLoggedIn, isOwner, validateListing } = require('../middleware');
const listingController = require('../controllers/listings');

router.route('/')
    // index Route
    .get(wrapAsync(listingController.index))
    //create Listngs
    .post(validateListing, isLoggedIn, wrapAsync(listingController.createListing));

// new Route
router.get('/new', isLoggedIn, listingController.randerNewForm);

router.route('/:id')
    //show route 
    .get(wrapAsync(listingController.showListing))
    //update route
    .put(validateListing, isLoggedIn, isOwner, wrapAsync(listingController.updateListing))
    //delete route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));



//Edit Route
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));



module.exports = router;;