const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync')
const { listingSchema } = require('../schema');
const ExpressError = require('../utils/ExpressError');
const Listing = require('../models/listing');
const { isLoggedIn, isOwner, validateListing } = require('../middleware');
const listingController = require('../controllers/listings');

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.route('/')
    // index Route
    .get(wrapAsync(listingController.index))
    // //create Listngs
    // .post(validateListing, isLoggedIn, wrapAsync(listingController.createListing));
    .post(upload.single('listings[image]'), (req, res) => {
        console.log('Request received');
        console.log('req.file:', req.file);
        console.log('req.body:', req.body);
        res.send(req.file);
    });

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