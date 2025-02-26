const express = require('express');
const router = express.Router();
const wrapAsync=require('../utils/wrapAsync')
const { listingSchema } = require('../schema');
const ExpressError = require('../utils/ExpressError');
const Listing = require('../models/listing');
const { isLoggedIn } = require('../middleware');

const validateListing =(req,res,next)=>{
    let {error}=  listingSchema.validate(req.body);
        if(error){
            let errmsg =error.details.map((el)=> el.message).join(',');
            throw new ExpressError(400,errmsg);
        }else{
            next();
        }
}

// index Route
router.get('/',wrapAsync( async (req, res) => {
    const allListings = await Listing.find();
    res.render('listings/index.ejs', ({ allListings }));
}))

// new Route
router.get('/new',isLoggedIn, (req, res) => {  
    res.render('listings/new')
});

//show route 
router.get('/:id',wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate('reviews');;
    if(!listing){
        req.flash('error',"Listing you requested for does not exist!");
        res.redirect('/listings')
    }
    res.render('listings/show', { listing });
}))

// create route 
router.post('/', validateListing,isLoggedIn,wrapAsync(async(req,res,next) => {
         // Custom Error for Listing is empty
       
        // direct add in model by instance 
        const newListing = new Listing(req.body.listings);
        await newListing.save();
        req.flash('success',"New Listing Created!")
        res.redirect('/listings');
}));

//Edit Route
router.get('/:id/edit',isLoggedIn,wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash('error',"Listing you requested for does not exist!");
        res.redirect('/listings')
    }
    res.render('listings/edit', { listing });
}));

//update route
router.put('/:id',validateListing,isLoggedIn,wrapAsync( async (req, res) => {
     // Custom Error for Listing is empty
  
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listings });
    req.flash('success',"Listing Updated!")
    res.redirect('/listings/' + id)
}))

//delete route
router.delete('/:id',isLoggedIn,wrapAsync( async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    req.flash('success',"Listing Deleted")
    res.redirect('/listings');
}));

module.exports = router;;