const Listing = require('./models/listing');
const Review = require('./models/review');
const { listingSchema } = require('./schema');
const ExpressError = require('./utils/ExpressError');
const { reviewSchema } = require('./schema');

module.exports.isLoggedIn = (req, res, next) => {
    req.session.redirectUrl=req.originalUrl;
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must be loggedin to Create Listings');
        return res.redirect('/login')
    }
    return next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req,res,next)=>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash('error','you dont have permission');
        return res.redirect('/listings/' + id)
    }
    next();
}

module.exports.validateListing =(req,res,next)=>{
    let {error}=  listingSchema.validate(req.body);
        if(error){
            let errmsg =error.details.map((el)=> el.message).join(',');
            throw new ExpressError(400,errmsg);
        }else{
            next();
        }
}
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(400, errmsg);
    } else {
        next();
    }
}

module.exports.isReviewAuthor = async (req,res,next)=>{
    let { id,reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash('error','you dont have permission');
        return res.redirect('/listings/' + id)
    }
    next();
}
